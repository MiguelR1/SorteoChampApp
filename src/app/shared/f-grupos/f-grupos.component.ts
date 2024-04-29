import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { Equipo, fasesGrupos } from '../../interfaces/interface';
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

  fasesGrupos:fasesGrupos = {
    grupof1: [],
    grupof2: [],
    grupof3: [],
    grupof4: [],
    grupof5: [],
    grupof6: [],
    grupof7: [],
    grupof8: []
  }

  grupoA: boolean = false;
  grupoB: boolean = false;
  grupoC: boolean = false;
  grupoD: boolean = false;
  grupoE: boolean = false;
  grupoF: boolean = false;
  grupoG: boolean = false;
  grupoH: boolean = false;

  grupos:string[] = [];

  gruposCuandoMismaLiga: string[] = [];

  equiposEnPendiente: Equipo[] = []

  letraGrupo = signal('');

  equipoSacado!:Equipo;

  numSorteo:number = 0;

  numGrupo: number = 0;

  sorteoAdicional = false;

  mismaLeague = false;

  equipoBombo?: Equipo;

  bomboDestino?: string;


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

 sEquipo(number:number){

  this.letraGrupo.set('')

  this.equipoBombo = undefined

  switch (number) {

    case 1:
      if (this.bombo1.length != 0) {

        const grupo71 = this.fasesGrupos.grupof7.find(m => m.id == '1')
        const grupo61 = this.fasesGrupos.grupof6.find(m => m.id == '1')
        const grupo51 = this.fasesGrupos.grupof5.find(m => m.id == '1')
        const grupo41 = this.fasesGrupos.grupof4.find(m => m.id == '1')
        const grupo31 = this.fasesGrupos.grupof3.find(m => m.id == '1')
        const grupo21 = this.fasesGrupos.grupof2.find(m => m.id == '1')
        const grupo11 = this.fasesGrupos.grupof1.find(m => m.id == '1')

      if(grupo71) {
        this.eRandom(1)
        this.fasesGrupos.grupof8.push(this.bombo1[this.numSorteo])
        this.bombo1.splice(this.numSorteo, 1)
      }else if(grupo61) {
        this.eRandom(1)
        this.fasesGrupos.grupof7.push(this.bombo1[this.numSorteo])
        this.bombo1.splice(this.numSorteo, 1)
      }else if(grupo51){
        this.eRandom(1)
        this.fasesGrupos.grupof6.push(this.bombo1[this.numSorteo])
        this.bombo1.splice(this.numSorteo, 1)
      }else if(grupo41){
        this.eRandom(1)
        this.fasesGrupos.grupof5.push(this.bombo1[this.numSorteo])
        this.bombo1.splice(this.numSorteo, 1)
      }else if(grupo31){
        this.eRandom(1)
        this.fasesGrupos.grupof4.push(this.bombo1[this.numSorteo])
        this.bombo1.splice(this.numSorteo, 1)
      }else if (grupo21) {
        this.eRandom(1)
        this.fasesGrupos.grupof3.push(this.bombo1[this.numSorteo])
        this.bombo1.splice(this.numSorteo, 1)
      }else if (grupo11) {
        this.eRandom(1)
        this.fasesGrupos.grupof2.push(this.bombo1[this.numSorteo])
        this.bombo1.splice(this.numSorteo, 1)
      }else{
        this.eRandom(1)
        this.fasesGrupos.grupof1.push(this.bombo1[this.numSorteo])
        this.bombo1.splice(this.numSorteo, 1)
      }
    }
      break;

    case 2:
    this.grupos = [];

    this.eRandom(2)

    this.equipoSacado = this.bombo2[this.numSorteo];

    //Revision de la primera fase de grupo

    const mismoid1 = this.fasesGrupos.grupof1.find( m => m.id == this.equipoSacado.id)

    if (!mismoid1) {
      const mismal1 = this.fasesGrupos.grupof1.find( m => m.league == this.equipoSacado.league)

      if (!mismal1) {
        this.grupoA = true
        this.grupos.push('A')
      } else{
        this.grupoA = false
      }
    }

  //revision de la segunda fase de grupos
  const mismoid2 = this.fasesGrupos.grupof2.find( m => m.id == this.bombo2[this.numSorteo].id)

  if (!mismoid2) {
    const mismal2 = this.fasesGrupos.grupof2.find( m => m.league == this.bombo2[this.numSorteo].league)

    if (!mismal2) {
      this.grupoB = true
      this.grupos.push('B')
    } else{
      this.grupoB = false
    }
  }

  //Revision de la tercera fase de grupos

  const mismoid3 = this.fasesGrupos.grupof3.find( m => m.id == this.bombo2[this.numSorteo].id)

  if (!mismoid3) {
    const mismal3 = this.fasesGrupos.grupof3.find( m => m.league == this.bombo2[this.numSorteo].league)

    if (!mismal3) {
      this.grupoC = true
      this.grupos.push('C')
    }else{
      this.grupoC = false
    }
  }

  //Revision de la cuarta fase de grupos

  const mismoid4 = this.fasesGrupos.grupof4.find( m => m.id == this.bombo2[this.numSorteo].id)

  if (!mismoid4) {
    const mismal4 = this.fasesGrupos.grupof4.find( m => m.league == this.bombo2[this.numSorteo].league)

    if (!mismal4) {
      this.grupoD = true
      this.grupos.push('D')
    } else{
      this.grupoD = false
    }
  }

  //Revision de la quinta fase de grupos

  const mismoid5 = this.fasesGrupos.grupof5.find( m => m.id == this.bombo2[this.numSorteo].id)

  if (!mismoid5) {
    const mismal5 = this.fasesGrupos.grupof5.find( m => m.league == this.bombo2[this.numSorteo].league)

    if (!mismal5) {
      this.grupoE = true
      this.grupos.push('E')
    } else{
      this.grupoE = false
    }
  }

  //Revision de la sexta fase de grupos

  const mismoid6 = this.fasesGrupos.grupof6.find( m => m.id == this.bombo2[this.numSorteo].id)

  if (!mismoid6) {
    const mismal6 = this.fasesGrupos.grupof6.find( m => m.league == this.bombo2[this.numSorteo].league)

    if (!mismal6) {
      this.grupoF = true
      this.grupos.push('F')
    } else{
      this.grupoF = false
    }
  }

  //Revision de la septima fase de grupos

  const mismoid7 = this.fasesGrupos.grupof7.find( m => m.id == this.bombo2[this.numSorteo].id)

  if (!mismoid7) {
    const mismal7 = this.fasesGrupos.grupof7.find( m => m.league == this.bombo2[this.numSorteo].league)

    if (!mismal7) {
      this.grupoG = true
      this.grupos.push('G')
    } else{
      this.grupoG = false
    }
  }

  //Revision de la octava fase de grupos

  const mismoid8 = this.fasesGrupos.grupof8.find( m => m.id == this.bombo2[this.numSorteo].id)

  if (!mismoid8) {
    const mismal8 = this.fasesGrupos.grupof8.find( m => m.league == this.bombo2[this.numSorteo].league)

    if (!mismal8) {
      this.grupoH = true
      this.grupos.push('H')
    } else{
      this.grupoH = false

    }
  }


  if (this.grupos.length === 0) {

    this.mismaLeague = true

    const mismaid12 = this.fasesGrupos.grupof1.find( m => m.id == this.equipoSacado.id)
    const mismaid22 = this.fasesGrupos.grupof2.find( m => m.id == this.equipoSacado.id)
    const mismaid32 = this.fasesGrupos.grupof3.find( m => m.id == this.equipoSacado.id)
    const mismaid42 = this.fasesGrupos.grupof4.find( m => m.id == this.equipoSacado.id)
    const mismaid52 = this.fasesGrupos.grupof5.find( m => m.id == this.equipoSacado.id)
    const mismaid62 = this.fasesGrupos.grupof6.find( m => m.id == this.equipoSacado.id)
    const mismaid72 = this.fasesGrupos.grupof7.find( m => m.id == this.equipoSacado.id)
    const mismaid82 = this.fasesGrupos.grupof8.find( m => m.id == this.equipoSacado.id)


    const mismal12 = this.fasesGrupos.grupof1.find( m => m.league == this.equipoSacado.league)
    const mismal22 = this.fasesGrupos.grupof2.find( m => m.league == this.equipoSacado.league)
    const mismal32 = this.fasesGrupos.grupof3.find( m => m.league == this.equipoSacado.league)
    const mismal42 = this.fasesGrupos.grupof4.find( m => m.league == this.equipoSacado.league)
    const mismal52 = this.fasesGrupos.grupof5.find( m => m.league == this.equipoSacado.league)
    const mismal62 = this.fasesGrupos.grupof6.find( m => m.league == this.equipoSacado.league)
    const mismal72 = this.fasesGrupos.grupof7.find( m => m.league == this.equipoSacado.league)
    const mismal82 = this.fasesGrupos.grupof8.find( m => m.league == this.equipoSacado.league)

    if (mismaid12 && !mismal12) {
      this.grupos.push('A')
      console.log('A');
    }
    if (mismaid22 && !mismal22) {
      this.grupos.push('B')
      console.log('B');
    }
    if (mismaid32 && !mismal32) {
      this.grupos.push('C')
      console.log('C');
    }
    if (mismaid42 && !mismal42) {
      this.grupos.push('D')
      console.log('D');
    }
    if (mismaid52 && !mismal52) {
      this.grupos.push('E')
      console.log('E');
    }
    if (mismaid62 && !mismal62) {
      this.grupos.push('F')
      console.log('F');
    }
    if (mismaid72 && !mismal72) {
      this.grupos.push('G')
      console.log('G');
    }
    if (mismaid82 && !mismal82) {
      this.grupos.push('H')
      console.log('H');
    }

    console.log(
      this.gruposCuandoMismaLiga
    );
  }

    break;

    case 3:

    this.grupos = [];

    this.eRandom(3)

    this.equipoSacado = this.bombo3[this.numSorteo];

    //Revision de la primera fase de grupo

    const mismo3id1 = this.fasesGrupos.grupof1.find( m => m.id == this.bombo3[this.numSorteo].id)

    if (!mismo3id1) {

    const mismal1 = this.fasesGrupos.grupof1.find( m => m.league == this.bombo3[this.numSorteo].league)

    if (!mismal1) {
      this.grupoA = true
      this.grupos.push('A')

    } else{
      this.grupoA = false
    }
  }

  //revision de la segunda fase de grupos
  const mismo3id2 = this.fasesGrupos.grupof2.find( m => m.id == this.bombo3[this.numSorteo].id)

  if (!mismo3id2) {
    const mismal2 = this.fasesGrupos.grupof2.find( m => m.league == this.bombo3[this.numSorteo].league)

    if (!mismal2) {
      this.grupoB = true
      this.grupos.push('B')

    } else{
      this.grupoB = false
    }
  }

  //Revision de la tercera fase de grupos

  const mismo3id3 = this.fasesGrupos.grupof3.find( m => m.id == this.bombo3[this.numSorteo].id)

  if (!mismo3id3) {
    const mismal3 = this.fasesGrupos.grupof3.find( m => m.league == this.bombo3[this.numSorteo].league)

    if (!mismal3) {
      this.grupoC = true
      this.grupos.push('C')

    }else{
      this.grupoC = false
    }
  }

  //Revision de la cuarta fase de grupos

  const mismo3id4 = this.fasesGrupos.grupof4.find( m => m.id == this.bombo3[this.numSorteo].id)

  if (!mismo3id4) {
    const mismal4 = this.fasesGrupos.grupof4.find( m => m.league == this.bombo3[this.numSorteo].league)

    if (!mismal4) {
      this.grupoD = true
      this.grupos.push('D')

    } else{
      this.grupoD = false
    }
  }

  //Revision de la quinta fase de grupos

  const mismo3id5 = this.fasesGrupos.grupof5.find( m => m.id == this.bombo3[this.numSorteo].id)

  if (!mismo3id5) {
    const mismal5 = this.fasesGrupos.grupof5.find( m => m.league == this.bombo3[this.numSorteo].league)

    if (!mismal5) {
      this.grupoE = true
      this.grupos.push('E')

    } else{
      this.grupoE = false
    }
  }

  //Revision de la sexta fase de grupos

  const mismo3id6 = this.fasesGrupos.grupof6.find( m => m.id == this.bombo3[this.numSorteo].id)

  if (!mismo3id6) {
    const mismal6 = this.fasesGrupos.grupof6.find( m => m.league == this.bombo3[this.numSorteo].league)

    if (!mismal6) {
      this.grupoF = true
      this.grupos.push('F')

    } else{
      this.grupoF = false
    }
  }

  //Revision de la septima fase de grupos

  const mismo3id7 = this.fasesGrupos.grupof7.find( m => m.id == this.bombo3[this.numSorteo].id)

  if (!mismo3id7) {
    const mismal7 = this.fasesGrupos.grupof7.find( m => m.league == this.bombo3[this.numSorteo].league)

    if (!mismal7) {
      this.grupoG = true
      this.grupos.push('G')

    } else{
      this.grupoG = false
    }
  }

  //Revision de la octava fase de grupos

  const mismo3id8 = this.fasesGrupos.grupof8.find( m => m.id == this.bombo3[this.numSorteo].id)

  if (!mismo3id8) {
    const mismal8 = this.fasesGrupos.grupof8.find( m => m.league == this.bombo3[this.numSorteo].league)

    if (!mismal8) {
      this.grupoH = true
      this.grupos.push('H')

    } else{
      this.grupoH = false
    }
  }


  if (this.grupos.length === 0) {

    this.mismaLeague = true

    const mismaid12 = this.fasesGrupos.grupof1.find( m => m.id == this.equipoSacado.id)
    const mismaid22 = this.fasesGrupos.grupof2.find( m => m.id == this.equipoSacado.id)
    const mismaid32 = this.fasesGrupos.grupof3.find( m => m.id == this.equipoSacado.id)
    const mismaid42 = this.fasesGrupos.grupof4.find( m => m.id == this.equipoSacado.id)
    const mismaid52 = this.fasesGrupos.grupof5.find( m => m.id == this.equipoSacado.id)
    const mismaid62 = this.fasesGrupos.grupof6.find( m => m.id == this.equipoSacado.id)
    const mismaid72 = this.fasesGrupos.grupof7.find( m => m.id == this.equipoSacado.id)
    const mismaid82 = this.fasesGrupos.grupof8.find( m => m.id == this.equipoSacado.id)


    const mismal12 = this.fasesGrupos.grupof1.find( m => m.league == this.equipoSacado.league)
    const mismal22 = this.fasesGrupos.grupof2.find( m => m.league == this.equipoSacado.league)
    const mismal32 = this.fasesGrupos.grupof3.find( m => m.league == this.equipoSacado.league)
    const mismal42 = this.fasesGrupos.grupof4.find( m => m.league == this.equipoSacado.league)
    const mismal52 = this.fasesGrupos.grupof5.find( m => m.league == this.equipoSacado.league)
    const mismal62 = this.fasesGrupos.grupof6.find( m => m.league == this.equipoSacado.league)
    const mismal72 = this.fasesGrupos.grupof7.find( m => m.league == this.equipoSacado.league)
    const mismal82 = this.fasesGrupos.grupof8.find( m => m.league == this.equipoSacado.league)

    if (mismaid12 && !mismal12) {
      this.grupos.push('A')
      console.log('A');
    }
    if (mismaid22 && !mismal22) {
      this.grupos.push('B')
      console.log('B');
    }
    if (mismaid32 && !mismal32) {
      this.grupos.push('C')
      console.log('C');
    }
    if (mismaid42 && !mismal42) {
      this.grupos.push('D')
      console.log('D');
    }
    if (mismaid52 && !mismal52) {
      this.grupos.push('E')
      console.log('E');
    }
    if (mismaid62 && !mismal62) {
      this.grupos.push('F')
      console.log('F');
    }
    if (mismaid72 && !mismal72) {
      this.grupos.push('G')
      console.log('G');
    }
    if (mismaid82 && !mismal82) {
      this.grupos.push('H')
      console.log('H');
    }

    console.log(
      this.grupos
    );
  }

    break;

    case 4:

    this.grupos = [];

    this.eRandom(4)

    this.equipoSacado = this.bombo4[this.numSorteo];


    //Revision de la primera fase de grupo

    const mismo4id1 = this.fasesGrupos.grupof1.find( m => m.id == this.bombo4[this.numSorteo].id)

    if (!mismo4id1) {

   const mismal1 = this.fasesGrupos.grupof1.find( m => m.league == this.bombo4[this.numSorteo].league)

    if (!mismal1) {
      this.grupoA = true
      this.grupos.push('A')
    } else{
      this.grupoA = false
    }
  }

  //revision de la segunda fase de grupos
  const mismo4id2 = this.fasesGrupos.grupof2.find( m => m.id == this.bombo4[this.numSorteo].id)

  if (!mismo4id2) {
    const mismal2 = this.fasesGrupos.grupof2.find( m => m.league == this.bombo4[this.numSorteo].league)

    if (!mismal2) {
      this.grupoB = true
      this.grupos.push('B')
    } else{
      this.grupoB = false
    }
  }

  //Revision de la tercera fase de grupos

  const mismo4id3 = this.fasesGrupos.grupof3.find( m => m.id == this.bombo4[this.numSorteo].id)

  if (!mismo4id3) {
    const mismal3 = this.fasesGrupos.grupof3.find( m => m.league == this.bombo4[this.numSorteo].league)

    if (!mismal3) {
      this.grupoC = true
      this.grupos.push('C')
    }else{
      this.grupoC = false
    }
  }

  //Revision de la cuarta fase de grupos

  const mismo4id4 = this.fasesGrupos.grupof4.find( m => m.id == this.bombo4[this.numSorteo].id)

  if (!mismo4id4) {
    const mismal4 = this.fasesGrupos.grupof4.find( m => m.league == this.bombo4[this.numSorteo].league)

    if (!mismal4) {
      this.grupoD = true
      this.grupos.push('D')
    } else{
      this.grupoD = false
    }
  }

  //Revision de la quinta fase de grupos

  const mismo4id5 = this.fasesGrupos.grupof5.find( m => m.id == this.bombo4[this.numSorteo].id)

  if (!mismo4id5) {
    const mismal5 = this.fasesGrupos.grupof5.find( m => m.league == this.bombo4[this.numSorteo].league)

    if (!mismal5) {
      this.grupoE = true
      this.grupos.push('E')
    } else{
      this.grupoE = false
    }
  }

  //Revision de la sexta fase de grupos

  const mismo4id6 = this.fasesGrupos.grupof6.find( m => m.id == this.bombo4[this.numSorteo].id)

  if (!mismo4id6) {
    const mismal6 = this.fasesGrupos.grupof6.find( m => m.league == this.bombo4[this.numSorteo].league)

    if (!mismal6) {
      this.grupoF = true
      this.grupos.push('F')
    } else{
      this.grupoF = false
    }
  }

  //Revision de la septima fase de grupos

  const mismo4id7 = this.fasesGrupos.grupof7.find( m => m.id == this.bombo4[this.numSorteo].id)

  if (!mismo4id7) {
    const mismal7 = this.fasesGrupos.grupof7.find( m => m.league == this.bombo4[this.numSorteo].league)

    if (!mismal7) {
      this.grupoG = true
      this.grupos.push('G')
    } else{
      this.grupoG = false
    }
  }

  //Revision de la octava fase de grupos

  const mismo4id8 = this.fasesGrupos.grupof8.find( m => m.id == this.bombo4[this.numSorteo].id)

  if (!mismo4id8) {
    const mismal8 = this.fasesGrupos.grupof8.find( m => m.league == this.bombo4[this.numSorteo].league)

    if (!mismal8) {
      this.grupoH = true
      this.grupos.push('H')
    } else{
      this.grupoH = false
    }
  }

  if (this.grupos.length === 0) {

    this.mismaLeague = true

    const mismaid12 = this.fasesGrupos.grupof1.find( m => m.id == this.equipoSacado.id)
    const mismaid22 = this.fasesGrupos.grupof2.find( m => m.id == this.equipoSacado.id)
    const mismaid32 = this.fasesGrupos.grupof3.find( m => m.id == this.equipoSacado.id)
    const mismaid42 = this.fasesGrupos.grupof4.find( m => m.id == this.equipoSacado.id)
    const mismaid52 = this.fasesGrupos.grupof5.find( m => m.id == this.equipoSacado.id)
    const mismaid62 = this.fasesGrupos.grupof6.find( m => m.id == this.equipoSacado.id)
    const mismaid72 = this.fasesGrupos.grupof7.find( m => m.id == this.equipoSacado.id)
    const mismaid82 = this.fasesGrupos.grupof8.find( m => m.id == this.equipoSacado.id)


    const mismal12 = this.fasesGrupos.grupof1.find( m => m.league == this.equipoSacado.league)
    const mismal22 = this.fasesGrupos.grupof2.find( m => m.league == this.equipoSacado.league)
    const mismal32 = this.fasesGrupos.grupof3.find( m => m.league == this.equipoSacado.league)
    const mismal42 = this.fasesGrupos.grupof4.find( m => m.league == this.equipoSacado.league)
    const mismal52 = this.fasesGrupos.grupof5.find( m => m.league == this.equipoSacado.league)
    const mismal62 = this.fasesGrupos.grupof6.find( m => m.league == this.equipoSacado.league)
    const mismal72 = this.fasesGrupos.grupof7.find( m => m.league == this.equipoSacado.league)
    const mismal82 = this.fasesGrupos.grupof8.find( m => m.league == this.equipoSacado.league)

    if (mismaid12 && !mismal12) {
      this.grupos.push('A')
      console.log('A');
    }
    if (mismaid22 && !mismal22) {
      this.grupos.push('B')
      console.log('B');
    }
    if (mismaid32 && !mismal32) {
      this.grupos.push('C')
      console.log('C');
    }
    if (mismaid42 && !mismal42) {
      this.grupos.push('D')
      console.log('D');
    }
    if (mismaid52 && !mismal52) {
      this.grupos.push('E')
      console.log('E');
    }
    if (mismaid62 && !mismal62) {
      this.grupos.push('F')
      console.log('F');
    }
    if (mismaid72 && !mismal72) {
      this.grupos.push('G')
      console.log('G');
    }
    if (mismaid82 && !mismal82) {
      this.grupos.push('H')
      console.log('H');
    }

    console.log(
      this.gruposCuandoMismaLiga
    );
  }

    break;
  }


  localStorage.setItem("Fases de grupos", JSON.stringify(this.fasesGrupos))
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
      this.numSorteo = Math.floor(Math.random() * (this.bombo1.length));
      break;

    case 2:
    this.numSorteo = Math.floor(Math.random() * (this.bombo2.length));
    break;

    case 3:
    this.numSorteo = Math.floor(Math.random() * (this.bombo3.length));
    break;

    case 4:
    this.numSorteo = Math.floor(Math.random() * (this.bombo4.length));

    break;

    default:
      break;
  }

}

gRandom(){

  let grupo
  grupo = Math.floor(Math.random() * (this.grupos.length));

  let letraGrupo = this.grupos[grupo];

  this.letraGrupo.set(letraGrupo)

  this.mismaLeague = false;

  this.equipoBombo = undefined;

  switch (letraGrupo) {
    case 'A':

    const id1 = this.fasesGrupos.grupof1.find(m => m.id == this.equipoSacado.id)

    if (id1) {
      console.log('Volvio al bombo', id1);

      this.equipoBombo = id1

      if(id1.id == '2'){
        this.bomboDestino = 'bombo 2';
        this.bombo2.push(id1)
        this.fasesGrupos.grupof1.splice(1, 1);
      }else if(id1.id == '3'){
        this.bomboDestino = 'bombo 3';
        this.bombo3.push(id1)
        this.fasesGrupos.grupof1.splice(2, 1);
      }else if(id1.id == '4'){
        this.bomboDestino = 'bombo 4';
        this.bombo4.push(id1)
        this.fasesGrupos.grupof1.splice(3, 1)
      }
    }


    if(this.fasesGrupos.grupof1[2]){
      this.fasesGrupos.grupof1.push(this.bombo4[this.numSorteo])
      this.bombo4.splice(this.numSorteo, 1)
    }
    else if (this.fasesGrupos.grupof1[1]) {
      this.fasesGrupos.grupof1.push(this.bombo3[this.numSorteo])
      this.bombo3.splice(this.numSorteo, 1)
    } else if (this.fasesGrupos.grupof1[0]) {
      this.fasesGrupos.grupof1.push(this.bombo2[this.numSorteo])
      this.bombo2.splice(this.numSorteo, 1)
    }

    this.grupos = []
    break;

    case 'B':

    const id2 = this.fasesGrupos.grupof2.find(m => m.id == this.equipoSacado.id)

    if (id2) {
      console.log('Volvio al bombo ', id2);

      this.equiposEnPendiente.push(id2)

      this.equipoBombo = id2

      if(id2.id == '2'){
                this.bomboDestino = 'bombo2'
                this.bombo2.push(id2)
        this.fasesGrupos.grupof2.splice(1, 1);
      }else if(id2.id == '3'){


        this.bomboDestino = 'bombo 3'
        this.bombo3.push(id2)
        this.fasesGrupos.grupof2.splice(2, 1);
      }else if(id2.id == '4'){
        this.bomboDestino = 'bombo 4'
        this.bombo4.push(id2)
        this.fasesGrupos.grupof2.splice(3, 1)
      }
    }

    if(this.fasesGrupos.grupof2[2]){
      this.fasesGrupos.grupof2.push(this.bombo4[this.numSorteo])
      this.bombo4.splice(this.numSorteo, 1)
    }
    else if (this.fasesGrupos.grupof2[1]) {
      this.fasesGrupos.grupof2.push(this.bombo3[this.numSorteo])
      this.bombo3.splice(this.numSorteo, 1)
    } else if (this.fasesGrupos.grupof2[0]) {
     this.fasesGrupos.grupof2.push(this.bombo2[this.numSorteo])
     this.bombo2.splice(this.numSorteo, 1)
    }

      this.grupos = []
      break;

    case 'C':

    const id3 = this.fasesGrupos.grupof3.find(m => m.id == this.equipoSacado.id)

    if (id3) {
      console.log('Volvio al bombo', id3);

      this.equiposEnPendiente.push(id3)

      this.equipoBombo = id3

      if(id3.id == '2'){
                this.bomboDestino = 'bombo 2'
                this.bombo2.push(id3)
        this.fasesGrupos.grupof3.splice(1, 1);
      }else if(id3.id == '3'){


        this.bomboDestino = 'bombo 3'
        this.bombo3.push(id3)
        this.fasesGrupos.grupof3.splice(2, 1);
      }else if(id3.id == '4'){
        this.bomboDestino = 'bombo 4'
        this.bombo4.push(id3)
        this.fasesGrupos.grupof3.splice(3, 1)
      }
    }

    if(this.fasesGrupos.grupof3[2]){
      this.fasesGrupos.grupof3.push(this.bombo4[this.numSorteo])
      this.bombo4.splice(this.numSorteo, 1)
    }
    else if (this.fasesGrupos.grupof3[1]) {
      this.fasesGrupos.grupof3.push(this.bombo3[this.numSorteo])
      this.bombo3.splice(this.numSorteo, 1)
    } else if (this.fasesGrupos.grupof3[0]) {
      this.fasesGrupos.grupof3.push(this.bombo2[this.numSorteo])
      this.bombo2.splice(this.numSorteo, 1)
    }

      this.grupos = []
      break;

    case 'D':

    const id4 = this.fasesGrupos.grupof4.find(m => m.id == this.equipoSacado.id)

    if (id4) {
      console.log('Volvio al bombo', id4);

      this.equiposEnPendiente.push(id4)

      this.equipoBombo = id4

      if(id4.id == '2'){
                this.bomboDestino = 'bombo 2'
                this.bombo2.push(id4)
        this.fasesGrupos.grupof4.splice(1, 1);
      }else if(id4.id == '3'){


        this.bomboDestino = 'bombo 3'
        this.bombo3.push(id4)
        this.fasesGrupos.grupof4.splice(2, 1);
      }else if(id4.id == '4'){
        this.bomboDestino = 'bombo 4'
        this.bombo4.push(id4)
        this.fasesGrupos.grupof4.splice(3, 1)
      }
    }

    if(this.fasesGrupos.grupof4[2]){
      this.fasesGrupos.grupof4.push(this.bombo4[this.numSorteo])
      this.bombo4.splice(this.numSorteo, 1)
    }
    else if (this.fasesGrupos.grupof4[1]) {
      this.fasesGrupos.grupof4.push(this.bombo3[this.numSorteo])
      this.bombo3.splice(this.numSorteo, 1)
    } else if (this.fasesGrupos.grupof4[0]) {
      this.fasesGrupos.grupof4.push(this.bombo2[this.numSorteo])
      this.bombo2.splice(this.numSorteo, 1)
    }

      this.grupos = []
      break;

    case 'E':

    const id5 = this.fasesGrupos.grupof5.find(m => m.id == this.equipoSacado.id)

    if (id5) {
      console.log('Volvio al bombo', id5);

      this.equiposEnPendiente.push(id5)

      this.equipoBombo = id1

      if(id5.id == '2'){
                this.bomboDestino = 'bombo 2'
                this.bombo2.push(id5)
        this.fasesGrupos.grupof5.splice(1, 1);
      }else if(id5.id == '3'){


        this.bomboDestino = 'bombo 3'
        this.bombo3.push(id5)
        this.fasesGrupos.grupof5.splice(2, 1);
      }else if(id5.id == '4'){
        this.bomboDestino = 'bombo 4'
        this.bombo4.push(id5)
        this.fasesGrupos.grupof5.splice(3, 1)
      }
    }

    if(this.fasesGrupos.grupof5[2]){
      this.fasesGrupos.grupof5.push(this.bombo4[this.numSorteo])
      this.bombo4.splice(this.numSorteo, 1)
    }
    else if (this.fasesGrupos.grupof5[1]) {
      this.fasesGrupos.grupof5.push(this.bombo3[this.numSorteo])
      this.bombo3.splice(this.numSorteo, 1)
    } else if (this.fasesGrupos.grupof5[0]) {
      this.fasesGrupos.grupof5.push(this.bombo2[this.numSorteo])
      this.bombo2.splice(this.numSorteo, 1)
    }

      this.grupos = []
      break;

    case 'F':

    const id6 = this.fasesGrupos.grupof6.find(m => m.id == this.equipoSacado.id)

    if (id6) {
      console.log('Volvio al bombo', id6);

      this.equiposEnPendiente.push(id6)

      this.equipoBombo = id6

      if(id6.id == '2'){
                this.bomboDestino = 'bombo 2'
                this.bombo2.push(id6)
        this.fasesGrupos.grupof6.splice(1, 1);
      }else if(id6.id == '3'){


        this.bomboDestino = 'bombo 3'
        this.bombo3.push(id6)
        this.fasesGrupos.grupof6.splice(2, 1);
      }else if(id6.id == '4'){
        this.bomboDestino = 'bombo 4'
        this.bombo4.push(id6)
        this.fasesGrupos.grupof6.splice(3, 1)
      }
    }

    if(this.fasesGrupos.grupof6[2]){
      this.fasesGrupos.grupof6.push(this.bombo4[this.numSorteo])
      this.bombo4.splice(this.numSorteo, 1)
    }
    else if (this.fasesGrupos.grupof6[1]) {
      this.fasesGrupos.grupof6.push(this.bombo3[this.numSorteo])
      this.bombo3.splice(this.numSorteo, 1)
    } else if (this.fasesGrupos.grupof6[0]) {
      this.fasesGrupos.grupof6.push(this.bombo2[this.numSorteo])
      this.bombo2.splice(this.numSorteo, 1)
    }

      this.grupos = []
      break;

    case 'G':


      const id7 = this.fasesGrupos.grupof7.find(m => m.id == this.equipoSacado.id)

    if (id7) {
      console.log('Volvio al bombo', id7);

      this.equiposEnPendiente.push(id7)

      this.equipoBombo = id7

      if(id7.id == '2'){
                this.bomboDestino = 'bombo 2'
                this.bombo2.push(id7)
        this.fasesGrupos.grupof7.splice(1, 1);
      }else if(id7.id == '3'){


        this.bomboDestino = 'bombo 3'
        this.bombo3.push(id7)
        this.fasesGrupos.grupof7.splice(2, 1);
      }else if(id7.id == '4'){
        this.bomboDestino = 'bombo 4'
        this.bombo4.push(id7)
        this.fasesGrupos.grupof7.splice(3, 1)
      }
    }

    if(this.fasesGrupos.grupof7[2]){
      this.fasesGrupos.grupof7.push(this.bombo4[this.numSorteo])
      this.bombo4.splice(this.numSorteo, 1)
    }
    else if (this.fasesGrupos.grupof7[1]) {
      this.fasesGrupos.grupof7.push(this.bombo3[this.numSorteo])
      this.bombo3.splice(this.numSorteo, 1)
    } else if (this.fasesGrupos.grupof7[0]) {
      this.fasesGrupos.grupof7.push(this.bombo2[this.numSorteo])
      this.bombo2.splice(this.numSorteo, 1)
    }

      this.grupos = []
      break;

    case 'H':

    const id8 = this.fasesGrupos.grupof8.find(m => m.id == this.equipoSacado.id)

    if (id8) {
      console.log('Volvio al bombo', id8);

      this.equiposEnPendiente.push(id8)

      this.equipoBombo = id8

      if(id8.id == '2'){
                this.bomboDestino = 'bombo 2'
                this.bombo2.push(id8)
        this.fasesGrupos.grupof8.splice(1, 1);
      }else if(id8.id == '3'){


        this.bomboDestino = 'bombo 3'
        this.bombo3.push(id8)
        this.fasesGrupos.grupof8.splice(2, 1);
      }else if(id8.id == '4'){
        this.bomboDestino = 'bombo 4'
        this.bombo4.push(id8)
        this.fasesGrupos.grupof8.splice(3, 1)
      }
    }

    if(this.fasesGrupos.grupof8[2]){
      this.fasesGrupos.grupof8.push(this.bombo4[this.numSorteo])
      this.bombo4.splice(this.numSorteo, 1)
    }
    else if (this.fasesGrupos.grupof8[1]) {
      this.fasesGrupos.grupof8.push(this.bombo3[this.numSorteo])
      this.bombo3.splice(this.numSorteo, 1)
    } else if (this.fasesGrupos.grupof8[0]) {
      this.fasesGrupos.grupof8.push(this.bombo2[this.numSorteo])
      this.bombo2.splice(this.numSorteo, 1)
    }

      this.grupos = []
      break;

  }

  console.log(this.fasesGrupos);


}

}
