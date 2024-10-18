const formLogin = document.getElementById("form-login");
const email = document.getElementById("email-login");
const password = document.getElementById("password-login");

async function validateLogin() {
  try {
    const response = await api.post("/users/login", {
      email: email.value,
      password: password.value,
    });

    if (email.value === "" && password.value === "") {
      alert("Login e senha são obrigatórios!");
    }

    if (response.status === 200) {
      alert("Login realizado com sucesso!");

      email.value = "";
      password.value = "";

      location.href = "list-note.html";
    }
  } catch (error) {
    console.error("Erro ao fazer login.", error);
  }
}

formLogin.addEventListener("submit", (event) => {
  event.preventDefault();

  validateLogin();
});
