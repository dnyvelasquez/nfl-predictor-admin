import { Injectable } from '@angular/core';
import { Observable, from, map, BehaviorSubject } from 'rxjs';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

export interface Equipo {
  id: string;
  nombre: string;
  puntaje: number;
  division: string;
  logo: string;
  participante: string;
}

@Injectable({
  providedIn: 'root'
})
export class Service { 

  private supabase: SupabaseClient;
  private loggedIn$ = new BehaviorSubject<boolean>(false);

  constructor() {

    this.supabase = createClient(
      'https://pvbulapbudwrxukilivj.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB2YnVsYXBidWR3cnh1a2lsaXZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg1ODU4MzcsImV4cCI6MjA3NDE2MTgzN30.ubiomG_a0XBqL8mnLu9ujyuXUSa1Zr7o_GBlMizmq0k'
    );

  }

  getEquipos(): Observable<Equipo[]> {
    return from(
      this.supabase.from('equipos').select('*').order('id', { ascending: true })
    ).pipe(
      map((res:any) => {
        if (res.error) {
          return[];
        }
        return res.data as Equipo[]
      })
    );
  }

  actualizarPuntaje(id: string, nuevoPuntaje: number): Observable<any> {
    return from(
      this.supabase
        .from('equipos')
        .update({ puntaje: nuevoPuntaje })
        .eq('id', id)
    );
  }  

  login(nombre: string, contrasena: string): Observable<boolean> {
    return from(
      this.supabase
        .from('usuarios')
        .select('*')
        .eq('nombre', nombre)
        .eq('contrasena', contrasena) 
        .single()
    ).pipe(
      map((res: any) => {
        if (res.error || !res.data) {
          console.error('❌ Error en login:', res.error);
          return false;
        }
        console.log('✅ Usuario encontrado:', res.data);
        return true;
      })
    );
  }

  logout(): void {
    this.loggedIn$.next(false);
    localStorage.removeItem('nombre');
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn$.asObservable();
  }

  getUser(): Observable<any> {
    return from(this.supabase.auth.getUser());
  }


}



