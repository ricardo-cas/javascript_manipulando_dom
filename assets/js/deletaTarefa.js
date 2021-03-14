// criando um componente do botão deletar tarefa

const BotaoDeleta = () => {
  const botaoDeleta = document.createElement("button");
  botaoDeleta.classList.add("delete-button");
  botaoDeleta.innerText = "deletar";
  botaoDeleta.addEventListener("click", deletarTarefa);
  return botaoDeleta;
};

const deletarTarefa = (evento) => {
  const botaoDeleta = evento.target;
  // quando eu deletar, quero deletar o elemento e não o botao
  const tarefaCompleta = botaoDeleta.parentElement;
  // removendo o elemento !
  tarefaCompleta.remove();
  return botaoDeleta;
};

export default BotaoDeleta;
