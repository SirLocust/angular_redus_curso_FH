import { INCREMENTAR, DECREMENTAR } from './contador.actions';
import { Action } from '@ngrx/store';

export function contadorReducer(state:number = 10 , action: Action): number {
  switch (action.type) {
    case INCREMENTAR:
      return  state +1;
    case DECREMENTAR:
      return state -1 ;
    default:
      return state;
  }
}
