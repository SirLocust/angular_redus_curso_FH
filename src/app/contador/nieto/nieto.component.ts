import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit {
  @Input() contador: number
  @Output() reset = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  resetContador():void{
    this.contador = 0;
    this.reset.emit(this.contador);
  }

}
