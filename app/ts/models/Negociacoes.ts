import { Negociacao } from './Negociacao';
import { Imprimivel } from './Imprimivel';
import { medirTempoDeExecucao } from '../helpers/decorators/index';

export class Negociacoes extends Imprimivel {

    private _negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    @medirTempoDeExecucao()
    paraArray(): Negociacao[] {
        return ([] as Negociacao[]).concat(this._negociacoes);
    }

    paraTexto(): void {
        console.log('Negociações');
        console.log(JSON.stringify(this._negociacoes));
    }
}