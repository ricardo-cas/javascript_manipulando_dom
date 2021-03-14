const BotaoConclui = () => {
  const botaoConclui = document.createElement("button");
  botaoConclui.classList.add("check-button");
  botaoConclui.innerText = "concluir"; //adicionando o texto no botão
  botaoConclui.addEventListener("click", concluirTarefa);

  return botaoConclui;
};

// o evento abaixo vai trazer informações sobre o evento do botão clicado
const concluirTarefa = (evento) => {
  const botaoConclui = evento.target;
  // subindo um elemento na DOM, ou seja, pegando o elemento pai do botao que eu cliquei.
  const tarefaCompleta = botaoConclui.parentElement;
  // toggle devolve um booleano se o botao foi clicado ou nao
  tarefaCompleta.classList.toggle("done");
};

export default BotaoConclui;
