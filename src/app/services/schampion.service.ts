import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Bombos, Equipo } from '../interfaces/interface';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchampionService {

  bombo1: Equipo[] = [];
  bombo2: Equipo[] = [];
  bombo3: Equipo[] = [];
  bombo4: Equipo[] = [];

  http = inject(HttpClient);

  getBombos():Observable<Bombos>{
    return this.http.get<Bombos>('../../assets/data/data.json')
  }

  postEquipo(body:any){
    return this.http.post('../../assets/fases-grupos/fases-grupos.json', JSON.stringify(body))
  }

  private numeroBomboS = new Subject<number>();
  public bomboN$ = this.numeroBomboS.asObservable();

  nBombo(bombo:number){
    this.numeroBomboS.next(bombo);
  }

  constructor() { }

}
