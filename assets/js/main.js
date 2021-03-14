(() => {
  const criarTarefa = (evento) => {
    evento.preventDefault();
    const lista = document.querySelector("[data-list]");
    const input = document.querySelector("[data-form-input]");
    const valor = input.value;

    const tarefa = document.createElement("li");
    tarefa.classList.add("task");
    const conteudo = `<p class="content">${valor}</p>`;
    tarefa.innerHTML = conteudo;
    tarefa.appendChild(BotaoConclui());
    lista.appendChild(tarefa);
    input.value = "";
  };

  const novaTarefa = document.querySelector("[data-form-button]");

  novaTarefa.addEventListener("click", criarTarefa);

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
})();
