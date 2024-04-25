import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Bombo, Bombos } from '../../interfaces/interface';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-ver-bombos',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './ver-bombos.component.html',
})
export class VerBombosComponent {

bombos!:Bombos;

  http = inject(HttpClient);

  ngOnInit(): void {
    this.http.get<Bombos>('../../../assets/data/data.json')
    .subscribe(
      data => {
        console.log('No carga')
        this.bombos = data
      }
    )
  }
}
