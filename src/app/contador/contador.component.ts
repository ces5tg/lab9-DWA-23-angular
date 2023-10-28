import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
  contador:number = 0

  constructor(){

  }
  incrementar():void{
    this.contador++
  }
  disminuir():void{
    this.contador--
  }
}
