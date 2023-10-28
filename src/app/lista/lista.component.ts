import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  items = [
    {
      ruta: 'assets/paisaje.jpg',
      titulo: 'item1',
      descripcion: 'descripcion alsjdflasjdflasdjflas'
    },
    {
      ruta: 'assets/paisaje.jpg',
      titulo: 'item2',
      descripcion: 'descripcion alsjdflasjdflasdjflas'
    },
    {
      ruta: 'assets/paisaje.jpg',
      titulo: 'item3',
      descripcion: 'descripcion alsjdflasjdflasdjflas'
    }
  ];
}
