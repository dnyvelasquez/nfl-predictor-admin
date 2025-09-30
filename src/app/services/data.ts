import { Injectable } from '@angular/core';
import { Observable, from, map, switchMap, forkJoin, tap } from 'rxjs';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class Service { 

  private supabase: SupabaseClient;

  constructor() {

    this.supabase = createClient(
      'https://pvbulapbudwrxukilivj.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB2YnVsYXBidWR3cnh1a2lsaXZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg1ODU4MzcsImV4cCI6MjA3NDE2MTgzN30.ubiomG_a0XBqL8mnLu9ujyuXUSa1Zr7o_GBlMizmq0k'
    );

  }


}

