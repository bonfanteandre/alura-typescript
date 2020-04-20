import { Imprimivel } from './Imprimivel';
import { Comparavel } from './Comparavel';

export interface MeuObjeto<T> extends Imprimivel, Comparavel<T> {

}