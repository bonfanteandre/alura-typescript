import { Negociacao } from './Negociacao';
import { Imprimivel } from './Imprimivel';
import { Comparavel } from './Comparavel'
import { medirTempoDeExecucao } from '../helpers/decorators/index';

export class Negociacoes implements Imprimivel, Comparavel<Negociacoes> {

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

    ehIgual(negociacoes: Negociacoes): boolean {
        return JSON.stringify(this._negociacoes) == JSON.stringify(negociacoes.paraArray());
    }
}