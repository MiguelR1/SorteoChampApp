import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Equipo } from '../../interfaces/interface';
import { SchampionService } from '../../services/schampion.service';
import { map, switchMap } from 'rxjs';
import { SorteoComponent } from '../../pages/sorteo/sorteo.component';

@Component({
  selector: 'app-f-grupos',
  standalone: true,
  imports: [
    CommonModule,
    SorteoComponent
  ],
  templateUrl: './f-grupos.component.html',
})
export class FGruposComponent implements OnInit{

  scS = inject(SchampionService);

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

  fGrupo1:Equipo[] = [];
  fGrupo2:Equipo[] = [];
  fGrupo3:Equipo[] = [];
  fGrupo4:Equipo[] = [];
  fGrupo5:Equipo[] = [];
  fGrupo6:Equipo[] = [];
  fGrupo7:Equipo[] = [];
  fGrupo8:Equipo[] = [];
  fGrupo9:Equipo[] = [];
  equipos1:Equipo[] = [];
  numSorteo:number = 0;

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

  ngOnInit(): void {
    this.getBombos()
  }

  constructor(){
    this.scS.bomboN$.subscribe(
      data => {
        this.sEquipo(data)
      }
    )
  }

  eRandom(number:number){

    switch (number) {
      case 1:
        this.numSorteo = Math.floor(Math.random() * (this.bombo1.length)) + 0;
        break;

      case 2:
      this.numSorteo = Math.floor(Math.random() * (this.bombo2.length));
      break;

      case 3:
      this.numSorteo = Math.floor(Math.random() * (this.bombo3.length)) + 0;
      break;

      case 4:
      this.numSorteo = Math.floor(Math.random() * (this.bombo4.length)) + 0;
      console.log(this.numSorteo);

      break;

      default:
        break;
    }

  }


sEquipo(number:number){

  switch (number) {

    case 1:

      if (this.bombo1.length != 0) {

      const grupo71 = this.fGrupo7.find(m => m.id == '1')
      const grupo61 = this.fGrupo6.find(m => m.id == '1')
      const grupo51 = this.fGrupo5.find(m => m.id == '1')
      const grupo41 = this.fGrupo4.find(m => m.id == '1')
      const grupo31 = this.fGrupo3.find(m => m.id == '1')
      const grupo21 = this.fGrupo2.find(m => m.id == '1')
      const grupo11 = this.fGrupo1.find(m => m.id == '1')

    if(grupo71) {
      this.eRandom(1)
      this.fGrupo8.push(this.bombo1[this.numSorteo])
      this.bombo1.splice(this.numSorteo, 1)
    }else if(grupo61) {
      this.eRandom(1)
      this.fGrupo7.push(this.bombo1[this.numSorteo])
      this.bombo1.splice(this.numSorteo, 1)
    }else if(grupo51){
      this.eRandom(1)
      this.fGrupo6.push(this.bombo1[this.numSorteo])
      this.bombo1.splice(this.numSorteo, 1)
    }else if(grupo41){
      this.eRandom(1)
      this.fGrupo5.push(this.bombo1[this.numSorteo])
      this.bombo1.splice(this.numSorteo, 1)
    }else if(grupo31){
      this.eRandom(1)
      this.fGrupo4.push(this.bombo1[this.numSorteo])
      this.bombo1.splice(this.numSorteo, 1)
    }else if (grupo21) {
      this.eRandom(1)
      this.fGrupo3.push(this.bombo1[this.numSorteo])
      this.bombo1.splice(this.numSorteo, 1)
    }else if (grupo11) {
      this.eRandom(1)
      this.fGrupo2.push(this.bombo1[this.numSorteo])
      this.bombo1.splice(this.numSorteo, 1)
    }else{
        this.eRandom(1)
        this.fGrupo1.push(this.bombo1[this.numSorteo])
        this.bombo1.splice(this.numSorteo, 1)
    }

    }

    break;

    case 2:

    console.log('hola');


  if (this.bombo2.length != 0) {

    const grupo72 = this.fGrupo7.find(m => m.id == '2')
    const grupo62 = this.fGrupo6.find(m => m.id == '2')
    const grupo52 = this.fGrupo5.find(m => m.id == '2')
    const grupo42 = this.fGrupo4.find(m => m.id == '2')
    const grupo32 = this.fGrupo3.find(m => m.id == '2')
    const grupo22 = this.fGrupo2.find(m => m.id == '2')
    const grupo12 = this.fGrupo1.find(m => m.id == '2')

      if(grupo72){

        this.fGrupo8.push(this.bombo2[0])
        this.bombo2.splice(0, 1)

      }else if(grupo62){

        let league;

        do {
          this.eRandom(2)
          league = this.fGrupo7.find( m => m.league === this.bombo2[this.numSorteo].league );
        } while (league);

        this.fGrupo7.push(this.bombo2[this.numSorteo])
        this.bombo2.splice(this.numSorteo, 1)

      }else if(grupo52){
        this.eRandom(2)
        let league;

        do {
          league = this.fGrupo6.find( m => m.league === this.bombo2[this.numSorteo].league );

          if (league) {
            this.eRandom(2)
          }
        } while (league);

        this.fGrupo6.push(this.bombo2[this.numSorteo])
        this.bombo2.splice(this.numSorteo, 1)

      }else if(grupo42){
        let league
        this.eRandom(2)

        do {
          league = this.fGrupo5.find( m => m.league === this.bombo2[this.numSorteo].league );

          if (league) {
            this.eRandom(2)
          }
        } while (league);
          this.fGrupo5.push(this.bombo2[this.numSorteo])
          this.bombo2.splice(this.numSorteo, 1)
      }else if(grupo32){
        this.eRandom(2)
        let league

        do {
          league = this.fGrupo4.find( m => m.league === this.bombo2[this.numSorteo].league );
          if (league) {
            this.eRandom(2)
          }
        } while (league);

          this.fGrupo4.push(this.bombo2[this.numSorteo])
          this.bombo2.splice(this.numSorteo, 1)

      }else if (grupo22) {
        this.eRandom(2)
        let league

        do {
          league = this.fGrupo3.find( m => m.league === this.bombo2[this.numSorteo].league );
          if (league) {
            this.eRandom(2)
          }
        } while (league);

          this.fGrupo3.push(this.bombo2[this.numSorteo])
          this.bombo2.splice(this.numSorteo, 1)
      }else if (grupo12) {
        let league
        this.eRandom(2)

        do {
          league = this.fGrupo2.find( m => m.league === this.bombo2[this.numSorteo].league );
          if (league) {
            this.eRandom(2)
          }
        } while (league);

          this.fGrupo2.push(this.bombo2[this.numSorteo])
          this.bombo2.splice(this.numSorteo, 1)

      }else{

        let league
        this.eRandom(2)

          do {
            league = this.fGrupo1.find( m => m.league === this.bombo2[this.numSorteo].league );

            if (league) {
            this.eRandom(2)
            }
          } while (league);



          this.fGrupo1.push(this.bombo2[this.numSorteo])
          this.bombo2.splice(this.numSorteo, 1)

      }
    }
      break;


    case 3:

      if (this.bombo3.length != 0) {

      const grupo73 = this.fGrupo7.find(m => m.id == '3')
      const grupo63 = this.fGrupo6.find(m => m.id == '3')
      const grupo53 = this.fGrupo5.find(m => m.id == '3')
      const grupo43 = this.fGrupo4.find(m => m.id == '3')
      const grupo33 = this.fGrupo3.find(m => m.id == '3')
      const grupo23 = this.fGrupo2.find(m => m.id == '3')
      const grupo13 = this.fGrupo1.find(m => m.id == '3')

        if(grupo73){
          this.fGrupo8.push(this.bombo3[0])
          this.bombo3.splice(0, 1)
        }

        else if(grupo63){
          let league;

          do {
            this.eRandom(3)
           league = this.fGrupo7.find( m => m.league === this.bombo3[this.numSorteo].league );

          } while (league);

          this.fGrupo7.push(this.bombo3[this.numSorteo])
          this.bombo3.splice(this.numSorteo, 1)

      }

        else if(grupo53){
          let league;
          do {
            this.eRandom(3)
            league = this.fGrupo6.find( m => m.league === this.bombo3[this.numSorteo].league );
          } while (league);

          this.fGrupo6.push(this.bombo3[this.numSorteo])
          this.bombo3.splice(this.numSorteo, 1)
      }

        else if(grupo43){
          let league

          do {
            this.eRandom(3)
            league = this.fGrupo5.find( m => m.league === this.bombo3[this.numSorteo].league );
          } while (league);

          this.fGrupo5.push(this.bombo3[this.numSorteo])
          this.bombo3.splice(this.numSorteo, 1)
      }

        else if(grupo33){
          let league

          do {
            this.eRandom(3)
            league = this.fGrupo4.find( m => m.league === this.bombo3[this.numSorteo].league );
        } while (league);
        this.fGrupo4.push(this.bombo3[this.numSorteo])
        this.bombo3.splice(this.numSorteo, 1)
      }

        else if (grupo23) {
          let league

        do {
          this.eRandom(3)

          league = this.fGrupo3.find( m => m.league === this.bombo3[this.numSorteo].league );
        } while (league);
        this.fGrupo3.push(this.bombo3[this.numSorteo])
        this.bombo3.splice(this.numSorteo, 1)
      }

        else if (grupo13) {
          let league

          do {
            this.eRandom(3)
            league = this.fGrupo2.find( m => m.league === this.bombo3[this.numSorteo].league );
          } while (league);
          this.fGrupo2.push(this.bombo3[this.numSorteo])
          this.bombo3.splice(this.numSorteo, 1)

      }else{
        let league

        do {
          this.eRandom(3)

          league = this.fGrupo1.find( m => m.league === this.bombo3[this.numSorteo].league );

        } while (league);

          this.fGrupo1.push(this.bombo3[this.numSorteo])
          this.bombo3.splice(this.numSorteo, 1)

      }
      }

    break;

    case 4:
      if (this.bombo4.length != 0) {

        const grupo74 = this.fGrupo7.find(m => m.id == '4')
        const grupo64 = this.fGrupo6.find(m => m.id == '4')
        const grupo54 = this.fGrupo5.find(m => m.id == '4')
        const grupo44 = this.fGrupo4.find(m => m.id == '4')
        const grupo34 = this.fGrupo3.find(m => m.id == '4')
        const grupo24 = this.fGrupo2.find(m => m.id == '4')
        const grupo14 = this.fGrupo1.find(m => m.id == '4')

          if(grupo74){
              this.fGrupo8.push(this.bombo4[0])
              this.bombo4.splice(0, 1)
       }

          else if(grupo64){

            let league;
            this.eRandom(4);


              do {

                league = this.fGrupo7.find((m) => m.league === this.bombo4[this.numSorteo].league);

                console.log(this.numSorteo);
                if(league){
                  this.eRandom(4);

                }

              } while (league);

              this.fGrupo7.push(this.bombo4[this.numSorteo]);
              this.bombo4.splice(this.numSorteo, 1);

          }

          else if(grupo54){

            let league;
            this.eRandom(4);


              do {
                league = this.fGrupo6.find((m) => m.league === this.bombo4[this.numSorteo].league);
                console.log(this.numSorteo);
                if(league){
                  this.eRandom(4);

                }

              } while (league);

              this.fGrupo6.push(this.bombo4[this.numSorteo]);
              this.bombo4.splice(this.numSorteo, 1);

          }

          else if(grupo44){
            let league;
            this.eRandom(4)

            do {
              league = this.fGrupo5.find( m => m.league === this.bombo4[this.numSorteo].league );
              if(league){
                this.eRandom(4)

              }

            } while (league);

              this.fGrupo5.push(this.bombo4[this.numSorteo])
              this.bombo4.splice(this.numSorteo, 1)

          }

          else if(grupo34){
            let league;
            this.eRandom(4)

            do {
              league = this.fGrupo4.find( m => m.league === this.bombo4[this.numSorteo].league );
              if(league){
                this.eRandom(4)

              }
            } while (league);

            this.fGrupo4.push(this.bombo4[this.numSorteo])
            this.bombo4.splice(this.numSorteo, 1)
          }

          else if (grupo24) {

            let league;
            this.eRandom(4)

            do {
              league = this.fGrupo3.find( m => m.league === this.bombo4[this.numSorteo].league );
              if(league){
                this.eRandom(4)

              }

            } while (league);
            this.fGrupo3.push(this.bombo4[this.numSorteo])
            this.bombo4.splice(this.numSorteo, 1)
          }

          else if (grupo14) {
            let league;
            this.eRandom(4)

            do {
              league = this.fGrupo2.find( m => m.league === this.bombo4[this.numSorteo].league );
              if(league){
                this.eRandom(4)

              }
            } while (league);
            this.fGrupo2.push(this.bombo4[this.numSorteo])
            this.bombo4.splice(this.numSorteo, 1)
          }else{
            let league;
              this.eRandom(4)

            do {
              league = this.fGrupo1.find( m => m.league === this.bombo4[this.numSorteo].league );
              if(league){
                this.eRandom(4)

              }
            } while (league);
            this.fGrupo1.push(this.bombo4[this.numSorteo])
            this.bombo4.splice(this.numSorteo, 1)
          }
        }
        break;

  }

  localStorage.setItem("fase A", JSON.stringify(this.fGrupo1))
  localStorage.setItem("fase B", JSON.stringify(this.fGrupo2))
  localStorage.setItem("fase C", JSON.stringify(this.fGrupo3))
  localStorage.setItem("fase D", JSON.stringify(this.fGrupo4))
  localStorage.setItem("fase E", JSON.stringify(this.fGrupo5))
  localStorage.setItem("fase F", JSON.stringify(this.fGrupo6))
  localStorage.setItem("fase G", JSON.stringify(this.fGrupo7))
  localStorage.setItem("fase H", JSON.stringify(this.fGrupo8))
}

}
