## Anotações sobre Typescript

Criar o arquivo package.json

```
$ npm init
```

Instalação do Typescript

```
$ npm install typescript@<versao>
```

Criar o arquivo tsconfig.json com a configuração mínima para o compilador

```
{
    "compilerOptions": {
        "target": "es6", COMPILA O CÓDIGO PARA ES6
        "outDir": "app/js", DIRETORIO PARA ONDE COMPILA O CODIGO
        "noEmitOnError": true, NAO COMPILA COM ERROS DE SINTAXE
        "noImplicitAny": true, NAO PERMITE TIPOS ANY IMPLICITOS
        "removeComments": true, REMOVE COMENTARIOS AO COMPILAR
        "module": "system", LOADER DE ARQUIVOS
        "strictNullChecks": true NAO PERMITE ATRIBUIR NULO A TIPOS DECLARADOS
    },
    "include": [
        "app/ts/**/*"
    ]
}
```

Adicionar script para compilação no package.json

```
 "compile": "tsc"
```

É interessante adicionar um script (dentro do package.json) que ficará monitorando e compilando novas alterações nos arquivos

```
 "watch": "tsc -w"
 ```