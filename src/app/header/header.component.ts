import { Component, OnInit } from '@angular/core';
import { IAnalisis } from '../interfaces/Ianalisis';
import { AnalisisService } from '../services/analisis-service.service';
import { AnalisisComponent } from '../pages/analisis/analisis.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  analisisFiltrados: IAnalisis[];

  constructor(public analisisService: AnalisisService){
    
  }

  buscarAnalisis(event: KeyboardEvent){
    const valor = (event.target as HTMLInputElement).value;
    if (valor === '') {
      this.analisisFiltrados = [];
    } else {
      this.analisisFiltrados = this.analisisService.analisis.filter(analisis => analisis.analisis.toLowerCase().includes(valor.toLowerCase()));
    }
  }

  mostrarAnalisis(analisis: IAnalisis){
    this.analisisService.mostrarAnalisis(analisis);
  }

  ngOnInit(): void {
  }
}
