const frase = document.getElementById("frase");

function mudarTexto() {
  const nome = prompt("Digite seu nome: ");
  frase.textContent = `E aí ${nome}! Você está deixando o seu site dinâmico.`;
}
