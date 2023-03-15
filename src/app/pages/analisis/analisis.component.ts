import { Component } from '@angular/core';
import { AnalisisService } from '../../services/analisis-service.service';
import { IAnalisis } from '../../interfaces/Ianalisis';

@Component({
  selector: 'app-analisis',
  templateUrl: './analisis.component.html',
  styleUrls: ['./analisis.component.css']
})
export class AnalisisComponent {

  precios: number;

  constructor(public analisisService: AnalisisService){
  }

  mostrarAnalisis(analisis: IAnalisis){
    this.analisisService.mostrarAnalisis(analisis);
  }

  sumarAnalisis(){
    this.precios = this.analisisService.analisisSeleccionados.reduce((total, analisis) => total + analisis.precio, 0);
  }
}
