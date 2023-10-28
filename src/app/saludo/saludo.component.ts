import { Component } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent {
  titulo:string = "BIENVENIDO CESAR"
  mensaje:string = "este es un mensaje de prueba"
  constructor(){

  }
  ngOnInit():void {

  }
}
