/* Desenvolva aqui a rotina */
const button = document.getElementById("btn_calcular");
const valorBase = document.getElementById("valor_base");
const valorTransporte = document.getElementById("valor_transporte");
const valorAlimentacao = document.getElementById("valor_alimentacao");
const valorReceita = document.getElementById("valor_receita");
const valorAutomovel = document.getElementById("valor_automovel");
const faltas = document.getElementById("faltas");
const valorDescontos = document.getElementById("valor_descontos");
const valorTotal = document.getElementById("valor_total");

// button.addEventListener("click", () => {
//   valorReceita.value =
//     Number(valorBase.value) +
//     Number(valorTransporte.value) +
//     Number(valorAlimentacao.value);

//   valorDescontos.value = Number(valorAutomovel.value) + Number(faltas.value);

//   valorTotal.value = Number(valorReceita.value) - Number(valorDescontos.value);
// });

valorBase.addEventListener("keyup", () => {
  valorReceita.value =
    Number(valorBase.value) +
    Number(valorTransporte.value) +
    Number(valorAlimentacao.value);
  valorTotal.value = Number(valorReceita.value) - Number(valorDescontos.value);
});

valorTransporte.addEventListener("keyup", () => {
  valorReceita.value =
    Number(valorBase.value) +
    Number(valorTransporte.value) +
    Number(valorAlimentacao.value);
  valorTotal.value = Number(valorReceita.value) - Number(valorDescontos.value);
});

valorAlimentacao.addEventListener("keyup", () => {
  valorReceita.value =
    Number(valorBase.value) +
    Number(valorTransporte.value) +
    Number(valorAlimentacao.value);
  valorTotal.value = Number(valorReceita.value) - Number(valorDescontos.value);
});

valorAutomovel.addEventListener("keyup", () => {
  valorDescontos.value = Number(valorAutomovel.value) + Number(faltas.value);
  valorTotal.value = Number(valorReceita.value) - Number(valorDescontos.value);
});

faltas.addEventListener("keyup", () => {
  valorDescontos.value = Number(valorAutomovel.value) + Number(faltas.value);
  valorTotal.value = Number(valorReceita.value) - Number(valorDescontos.value);
});
