import { Negociacao, Negociacoes, NegociacaoParcial } from '../models/index';
import { NegociacoesView, MensagemView } from '../views/index';
import { medirTempoDeExecucao, domInject, throttle } from '../helpers/decorators/index';
import { NegociacaoService } from '../services/index';

let timer = 0;

export class NegociacaoController {

    @domInject('#data')
    private _inputData: JQuery;

    @domInject('#quantidade')
    private _inputQuantidade: JQuery;

    @domInject('#valor')
    private _inputValor: JQuery;

    private _negociacoes: Negociacoes = new Negociacoes();
    private _negociacoesView: NegociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView: MensagemView = new MensagemView('#mensagemView');

    private _negociacaoService = new NegociacaoService();.

    constructor() {
        this._negociacoesView.update(this._negociacoes);
    }

    @throttle()
    @medirTempoDeExecucao(true)
    adiciona() {
        
        let data = new Date(this._inputData.val().replace(/-/g, ','));

        if (!this._ehDiaUtil(data)) {
            this._mensagemView.update('Somente negociações em dias úteis são permitidas');
            return;
        }

        const negociacao = new Negociacao(
            data, 
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );

        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso!');
    }

    private _ehDiaUtil(data: Date): boolean {
        return data.getDay() != DiaDaSemana.Domingo && data.getDay() != DiaDaSemana.Sabado;
    }

    @throttle()
    importaDados() {
        
        function isOk(res: Response) {
            if (!res.ok) {
                throw new Error(res.statusText);
            }
            return res;            
        }

        this._negociacaoService
            .obterNegociacoes(isOk)
            .then(negociacoes => {
                negociacoes.forEach(negociacao => this._negociacoes.adiciona(negociacao);
                this._negociacoesView.update(this._negociacoes);
            })
            .catch(err => {
                console.log(err.message);
                this._negociacoesView.update(this._negociacoes)
            });
    }
}

enum DiaDaSemana {
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}
