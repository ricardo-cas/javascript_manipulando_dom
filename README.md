# JavaScript: Manipulando a DOM

## Percorrendo objetos dentro da DOM

Para fazer um varredura dentro dos objetos do seu documento, utilizando JavaScript, você pode utilizar o comando:
`document.querySelector()` e dentro deste comando, passar como parâmetro o seletor que você está procurando.
Ex:
`document.querySelector('[data-form-button]')`
No caso acima, estou utilizando um _data atribute_ que serve como um separador de responsábilidades, isso facilita a manipulação dos elementos dentro do documento HTML pelo JavaScript.
