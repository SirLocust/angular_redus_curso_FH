import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() contador: number;
  @Output() cambioContador = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  multiplicar(): void{
    this.contador *= 2;
    this.emitirContador();
  }

  dividir(): void{
    this.contador /= 2;
    this.emitirContador();
  }

 

  resetNieto(reset): void {
    this.contador = reset;
    this.emitirContador();
  }

  emitirContador(): void{
    this.cambioContador.emit(this.contador);
    
  }
}
