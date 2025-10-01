import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { Service } from '../../services/data';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,    
    MatCardModule,
    MatDividerModule,
    MatTableModule ,
    MatIconModule
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})

export class Home {
  
  constructor(private service: Service) {


  }


}


