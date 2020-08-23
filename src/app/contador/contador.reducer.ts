import { accions, INCREMENTAR, DECREMENTAR, MULTIPLICAR, DIVIDIR, RESET } from './contador.actions';


export function contadorReducer(state:number = 10 , action: accions): number {
  switch (action.type) {
    case INCREMENTAR:
      return  state + 1;
    case DECREMENTAR:
      return state - 1 ;
    case MULTIPLICAR:
      return state * action.getPayload() ;
    case DIVIDIR:
      return state / action.getPayload();
    case RESET:
      return state = 0;
    default:
      return state;
  }
}
