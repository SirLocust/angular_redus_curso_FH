import { MultiplicarAction, DividirAction } from './../contador.actions';
import { AppState } from './../../app.reducers';
import { Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  contador: number;
  

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store.select("contador").subscribe(contador =>{
      this.contador = contador;
    })
  }

  multiplicar(): void{
    const accion = new MultiplicarAction(5);
    this.store.dispatch(accion);
  
  }

  dividir(): void{
   const accion = new DividirAction(10);
   this.store.dispatch(accion)
  
  }

 

  resetNieto(reset): void {
    this.contador = reset;
  
  }

  
}
