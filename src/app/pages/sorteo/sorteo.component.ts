import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { Bombos, Equipo } from '../../interfaces/interface';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SchampionService } from '../../services/schampion.service';
import { FGruposComponent } from '../../shared/f-grupos/f-grupos.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sorteo',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    FGruposComponent,
    RouterModule
  ],
  providers: [SchampionService],
  templateUrl: './sorteo.component.html',
})
export class SorteoComponent implements OnInit {

  http = inject(HttpClient);


  ngOnInit(): void {
    this.getBombos()

    this.equiposBombo = this.scS.getBombos()

  }



  public get bombo1() : Equipo[] {
    return this.scS.bombo1;
  }
  public get bombo2() : Equipo[] {
    return this.scS.bombo2;
  }public get bombo3() : Equipo[] {
    return this.scS.bombo3;
  }public get bombo4() : Equipo[] {
    return this.scS.bombo4;
  }

  public set bombo1(value:Equipo[]){
    this.scS.bombo1 = value;
  }
  public set bombo2(value:Equipo[]){
    this.scS.bombo2 = value;
  }public set bombo3(value: Equipo[]){
    this.scS.bombo3 = value;
  }public set bombo4(value: Equipo[]){
    this.scS.bombo4 = value;
  }



  equiposBombo!:Observable<Bombos>;

  scS = inject(SchampionService);

  getBombos() {
     this.scS.getBombos()
     .subscribe(
      data =>
        {
          this.bombo1 = data.bombo1.equipos,
          this.bombo2 = data.bombo2.equipos,
          this.bombo3 = data.bombo3.equipos,
          this.bombo4 = data.bombo4.equipos
        }
    )
  }

  sEquipo(bombo:number){
    this.scS.nBombo(bombo);
  }


}
