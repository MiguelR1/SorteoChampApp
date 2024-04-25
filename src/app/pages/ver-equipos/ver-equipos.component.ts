import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { SchampionService } from '../../services/schampion.service';
import { Equipo } from '../../interfaces/interface';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-ver-equipos',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './ver-equipos.component.html',
})
export class VerEquiposComponent implements OnInit {

  srS = inject(SchampionService);

  // equipo:Equipo = {
  //   id: "1",
  //   name: "Miguel",
  //   img: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSrQcGWFbrIUoB-XbjFNoR-1R6eO4phMrMv5Px550qnwct_9NbCFyY3dmCdejxEdWF_g-uhHuLnLPbmb68",
  //   league: 'laliga'
  // }


  // postEquipo(){
  //   this.srS.postEquipo(this.equipo)
  //     .subscribe(data => console.log(data)
  //     )
  // }

  ngOnInit() {
    this.srS.getBombos()
    .subscribe(data => console.log(data)
    )
  }

  constructor(){}



}
