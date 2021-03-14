- [JavaScript: Manipulando a DOM](#javascript-manipulando-a-dom)
  - [Percorrendo objetos dentro da DOM](#percorrendo-objetos-dentro-da-dom)
  - [Escutando um elemento](#escutando-um-elemento)

# JavaScript: Manipulando a DOM

## Percorrendo objetos dentro da DOM

Para fazer um varredura dentro dos objetos do seu documento, utilizando JavaScript, você pode utilizar o comando:<br>
`document.querySelector()` e dentro deste comando, passar como parâmetro o seletor que você está procurando.
<br>
Ex: `document.querySelector('[data-form-button]')` <br>
No caso acima, estou utilizando um _data atribute_ que serve como um separador de responsábilidades, isso facilita a manipulação dos elementos dentro do documento HTML pelo JavaScript.

## Escutando um elemento

É possível ficar escutando um evento do HTML acontecer e assim executar uma ação.Para isto devemo utilizar o `addEventListener(evento,ação)`<br>
