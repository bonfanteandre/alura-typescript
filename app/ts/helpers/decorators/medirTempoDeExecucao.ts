export function medirTempoDeExecucao(emSegundos: boolean = false) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: any[]) {

            let unidade = 'ms';
            let divisor = 1;

            if (emSegundos) {
                unidade = 's';
                divisor = 1000;
            }

            console.log('----------------------------------');
            console.log(`Parâmetros passados para o método ${propertyKey}: ${JSON.stringify(args)}`);

            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();

            console.log(`Retorno do método ${propertyKey}: ${JSON.stringify(retorno)}`);
            console.log(`Tempo de execução do método ${propertyKey}: ${(t2 - t1) / divisor} ${unidade}`);

            return retorno;
        }
        
        return descriptor;
    }
}