- [JavaScript: Manipulando a DOM](#javascript-manipulando-a-dom)
  - [Percorrendo objetos dentro da DOM](#percorrendo-objetos-dentro-da-dom)
  - [Escutando um elemento](#escutando-um-elemento)
  - [Capturando o valor dentro de um elemento](#capturando-o-valor-dentro-de-um-elemento)
  - [Trabalhando com formulários](#trabalhando-com-formulários)
  - [Pegando o valor que está no console e adicionando no corpo da aplicação](#pegando-o-valor-que-está-no-console-e-adicionando-no-corpo-da-aplicação)
  - [Criando elementos na DOM](#criando-elementos-na-dom)
  - [Utilizando a IIFE](#utilizando-a-iife)
  - [Criando componentes](#criando-componentes)

# JavaScript: Manipulando a DOM

## Percorrendo objetos dentro da DOM

Para fazer um varredura dentro dos objetos do seu documento, utilizando JavaScript, você pode utilizar o comando:<br>
`document.querySelector()` e dentro deste comando, passar como parâmetro o seletor que você está procurando.
<br>
Ex: `document.querySelector('[data-form-button]')` <br>
No caso acima, estou utilizando um [data attribute](https://cursos.alura.com.br/data-attributes-do-html5-c109) que serve como um separador de responsábilidades, isso facilita a manipulação dos elementos dentro do documento HTML pelo JavaScript.

## Escutando um elemento

É possível ficar escutando um evento do HTML acontecer e assim executar uma ação. Para isto devemo utilizar o `addEventListener(evento,ação)`<br>

## Capturando o valor dentro de um elemento

É possível pegar informações dos elementos utilizando o comando `value`.

## Trabalhando com formulários

O comportamento padrão do formulário vai ser sempre enviar dados, ele sempre está enviando dados para algum lugar.

Para prevenir o comportamento padrão do formulário (que é enviar dados), utilizamos o `event.preventDefault() `, desta forma o formulário não envia o dado para algum lugar e assim a página não recarrega.

## Pegando o valor que está no console e adicionando no corpo da aplicação

Para adicionar elementos no documento utilizamos a função `innerHTML`.

## Criando elementos na DOM

Para criar elementos no documento utilizamos a função `document.createElement(<especificar_o_elemento>)` .

## Utilizando a IIFE

Encapsulando o escopo da função para prevenir o usuário de acessar as funções do JavaScript

## Criando componentes

Componentes são partes da sua aplicação e podem ser utilizados em várias partes dela, eles funcionam de forma independênte.
