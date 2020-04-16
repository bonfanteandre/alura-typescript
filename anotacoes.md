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
        "target": "es6",
        "outDir": "app/js",
        "noEmitOnError": true,
        "noImplicitAny": true
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
 "start": "tsc -w"
 ```