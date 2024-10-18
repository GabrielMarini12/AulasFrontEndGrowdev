const frase = document.getElementById("frase");
let contador = 0;

function incrementar() {
  contador += 1;
  frase.textContent = `O contador está com ${contador} cliques.`;
}

function zerar() {
  contador = 0;
  frase.textContent = `O contador está com ${contador} cliques.`;
}
