import { Reset } from './../contador.actions';
import { AppState } from './../../app.reducers';
import { Store } from '@ngrx/store';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit {
  contador: number
  
  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select("contador").subscribe( contador =>{
      this.contador = contador;
    })
  }

  resetContador():void{
   const accionReset = new Reset();

   this.store.dispatch(accionReset);
  
  }

}
