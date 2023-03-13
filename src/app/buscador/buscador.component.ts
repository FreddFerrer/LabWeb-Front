import { Component, OnInit } from '@angular/core';
import { IAnalisis } from '../interfaces/Ianalisis';
import { Observable, debounceTime, distinctUntilChanged } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AnalisisService } from '../services/analisis-service.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit{

  

  ngOnInit(): void {
  }

  
}
