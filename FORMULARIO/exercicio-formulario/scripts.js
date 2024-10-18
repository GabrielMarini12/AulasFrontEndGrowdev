const form = document.querySelector("form");
const nome = document.getElementById("nome");
const endereco = document.getElementById("endereco");
const cidade = document.getElementById("cidade");
const estado = document.getElementById("estado");
const cargos = document.querySelectorAll('input[name="cargo"]');
const interesses = document.querySelectorAll('input[name="interesses"]');
const mensagem = document.getElementById("messagem");
const btnEnviar = document.querySelector(".btn-enviar");
const btnLimpar = document.querySelector(".btn-limpar");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(`Nome: ${nome.value}`);
  console.log(`Endereço: ${endereco.value}`);
  console.log(`Cidade: ${cidade.value}`);
  console.log(`Estado: ${estado.value}`);

  cargos.forEach((cargo) => {
    if (cargo.checked) {
      console.log(`Cargo: ${cargo.value}`);
    }
  });

  interesses.forEach((interesse) => {
    if (interesse.checked) {
      console.log(`Área de interesse: ${interesse.value}`);
    }
  });

  console.log(`Mensagem: ${mensagem.value}`);
});

btnLimpar.addEventListener("click", () => {
  nome.value = "";
  endereco.value = "";
  cidade.value = "";
  estado.value = "";

  interesses.forEach((interesse) => {
    interesse.checked = null;
  });

  mensagem.value = "";
});
