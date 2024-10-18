const presenca = document.getElementById("contador");
const statusChamada = document.getElementById("status");
let contador = 0;

function aumentarPresenca() {
  contador += 1;
  presenca.textContent = contador;

  if (contador < 5) {
    statusChamada.textContent = "Aguarde por mais presenças";
    statusChamada.className = "aguardando";
  } else {
    statusChamada.textContent = "A aula pode começar";
    statusChamada.className = "pode-comecar";
  }
}

// Especificação da Atividade:
// Descrição: Criar uma página HTML usando apenas JavaScript para criar dinamicamente toda a estrutura
// necessária para simular um contador de likes em uma postagem fictícia em uma rede social.
// O contador aumentará cada vez que o botão de "Curtir" for clicado. Quando o contador atingir um número
// mínimo de likes (por exemplo, 10), a mensagem de "Postagem Popular" deve aparecer.
