import { Component, OnInit } from '@angular/core';
import { BuscadorComponent } from '../buscador/buscador.component';
import { IAnalisis } from '../interfaces/Ianalisis';
import { HttpClient } from '@angular/common/http';
import { AnalisisService } from '../services/analisis-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{


  
  buscarAnalisis(event: KeyboardEvent){
    const valor = (event.target as HTMLInputElement).value;
    
    console.log(valor)
  }


  ngOnInit(): void {
    
  }
}
