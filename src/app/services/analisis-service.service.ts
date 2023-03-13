import { Injectable } from '@angular/core';
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
  public analisisFiltrado: IAnalisis[];
  public urlEndPoint:string = 'http://localhost:8080/api/analisis';

  constructor(private http: HttpClient) { 
    this.http = http;
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

}
