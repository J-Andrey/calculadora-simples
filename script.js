// Seleciona os elementos do DOM
const botoes = document.querySelectorAll('.btn');
const display = document.getElementById('resultado');

// Variáveis para armazenar a operação
let operacao = "";

// Adiciona eventos aos botões
botoes.forEach((botao) => {
  botao.addEventListener('click', () => {
    const valor = botao.getAttribute('data-valor');
    processarEntrada(valor);
  });
});

// Adiciona evento para capturar teclas do teclado
document.addEventListener('keydown', (event) => {
  const tecla = event.key;

  // Só processa o Enter se o display estiver com o foco
  if (tecla === "Enter") {
    // Impede o comportamento do Enter fora do display
    if (document.activeElement === display) {
      processarEntrada("=");  // Só executa o "=" quando o display estiver focado
    }
    event.preventDefault(); // Impede o Enter de funcionar fora do display
  } else if ("0123456789+-*/.".includes(tecla)) {
    processarEntrada(tecla);
  } else if (tecla === "c" || tecla === "C") {
    processarEntrada("C");
  }
});

// Função para processar a entrada
function processarEntrada(valor) {
  if (valor === "C") {
    // Limpa o display
    operacao = "";
    display.value = "";
  } else if (valor === "=") {
    // Calcula o resultado
    try {
      operacao = eval(operacao); // Calcula a operação (use com cuidado!)
      display.value = operacao;
    } catch {
      display.value = "Erro";
      operacao = "";
    }
  } else {
    // Adiciona o valor ao display
    operacao += valor;
    display.value = operacao;
  }
}
