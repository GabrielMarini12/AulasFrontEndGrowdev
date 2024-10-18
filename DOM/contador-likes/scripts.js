const h1 = document.createElement("h1");
h1.textContent = "Contador de Likes";
document.body.appendChild(h1);

const container = document.createElement("div");
container.setAttribute("class", "container");
document.body.appendChild(container);

const h2 = document.createElement("h2");
h2.textContent = "Postagem";
container.appendChild(h2);

const contador = document.createElement("p");
contador.setAttribute("id", "contador");
container.textContent = "0";
container.appendChild(contador);

const statuss = document.createElement("p");
statuss.classList.add("aguardando");
statuss.textContent = "Seja o primeiro a curtir";
container.appendChild(statuss);

const button = document.createElement("button");
button.textContent = "Curtir";
container.appendChild(button);

let numeroLikes = 0;
const numeroMinimoLikes = 10;

function incrementarLikes() {
  contador.textContent = numeroLikes;

  if (numeroLikes >= numeroMinimoLikes) {
    statuss.textContent = "Postagem popular";
    statuss.classList.replace("aguardando", "postagem-popular");
  } else {
    statuss.textContent = "Seja o primeiro a curtir";
    statuss.classList.replace("postagem-popular", "aguardando");
  }
}

button.onclick = incrementarLikes;
