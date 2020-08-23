import { Action } from '@ngrx/store';

export const INCREMENTAR = '[Contador] Incrementar';
export const DECREMENTAR = '[Contador] Decrementar';
export const MULTIPLICAR = '[Contador] Multiplicar';
export const DIVIDIR = '[Contador] Dividir';


export class IncrementarAction implements Action{
    readonly type = INCREMENTAR;
     
}


export class DecrementarAction implements Action{
    readonly type = DECREMENTAR;
}

export class MultiplicarAction implements Action{
    readonly type = MULTIPLICAR;
    private payload;
    constructor(  payload : number){
        this.payload = payload;
    }

    getPayload(): number{
        return this.payload
    }
     
}
export class DividirAction implements Action{
    readonly type = DIVIDIR;
    private payload;
    
    constructor(payload:number) {
        this.payload = payload;
    }
    getPayload(): number{
        return this.payload;    
    }

     
}

export type accions =   IncrementarAction |
                        DecrementarAction |
                        DividirAction     |
                        MultiplicarAction ;


