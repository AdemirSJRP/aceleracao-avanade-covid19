# AceleracaoAvanadeCovid19

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.5.

## Informações

Essa aplicação foi desenvolvida para entrega do desafio da Aceleração Avanade Global Dev #2.

A idéia dessa aplicação é exibir informações sobre os números totais da Covid-19 no Brasil na data selecionada pelo usuário.

Essas informações são carregadas através da API pública Covid19 Brazil API (https://covid19-brazil-api-docs.now.sh/)

Estrutura da aplicação:

- No componente AppComponent foi desenvolvido todo o layout da aplicação com header, conteúdo (onde foi inserida a rota) e rodapé.
- No módulo CovidInfoModule foi definida a rota padrão carregada no router através de lazy loading e seus componentes.
- O componente principal do módulo é o cov-covid-info que contém 3 componentes filhos:
  - cov-select-date: Componente onde o usuário seleciona a data que deseja consultar e retorna essa data através de um output que aciona o método que carrega os dados da API no componente cov-table-ufs
  - cov-table-ufs: Componente que contém uma tabela onde é feito o carregamento e exibição dos dados através da data selecionada utilizando DataSource para o carregamento/ordenação dos dados.
  - cov-total-brasil: Componente que exibe os cards com os totais somados (todo o Brasil) da data selecionada recebendo as informações do serviço CovidService
- Para o carregamento dos dados da API foi criado o serviço CovidService utilizando httpClient contendo alguns métodos observable que são consumidos pelos outros componentes para atualização dos dados utilizando Subject e BehaviorSubject
- A pasta Shared contém:
  - Módulo Shared configurando os módulos compartilhados pelos outros módulos da aplicação.
  - Interfaces utilizadas nos componentes e serviço
  - Pipe para formatar os números exibidos nos templates
  - Função para retornar a data no padrão requisitado pela API como parâmetrona consulta
- Foram utilizados vários componentes do Angular Material (Table, DatePicker, Card, Icon, Input, etc)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
