import { IncrementarAction, DecrementarAction } from './contador/contador.actions';
import { Action } from '@ngrx/store';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

interface AppState {
  contador : number;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contador: number;

  constructor( private store: Store<AppState > ){
    this.store.subscribe( state => {
      this.contador = state.contador;
    } )
  }

  incrementar(): void{ 
    const accion = new IncrementarAction();
    this.store.dispatch( accion);
  }

  decrementar(): void{
    const accion = new DecrementarAction();
    this.store.dispatch( accion);
  }

}
