import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAnalisis } from '../interfaces/Ianalisis';
import { Router } from '@angular/router';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnalisisService {

  private router : Router;
  private cargando =  true;
  public analisis: IAnalisis[];
  public analisisSeleccionados: IAnalisis[] = [];
  public urlEndPoint:string = 'https://labweb-production.up.railway.app';

  constructor(private http: HttpClient) { 
    this.cargarAnalisis();

  }

  cargarAnalisis(){
    return new Promise( ( resolve, reject ) => {
      this.http.get(this.urlEndPoint)
      .subscribe( (resp: IAnalisis[]) => {
        this.analisis = resp;
        this.cargando = false;
      });
    }); 
  }

  mostrarAnalisis(analisis: IAnalisis){
    this.analisisSeleccionados.push(analisis);
  }

}
