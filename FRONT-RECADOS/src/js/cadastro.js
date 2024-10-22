const formCadastro = document.getElementById("form-cadastro");
const name = document.getElementById("name-cadastro");
const email = document.getElementById("email-cadastro");
const password = document.getElementById("password-cadastro");

function setError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.textContent = message;
  formControl.classList.remove("success");
  formControl.classList.add("error");
}

function setSuccess(input) {
  const formControl = input.parentElement;

  formControl.classList.remove("error");
  formControl.classList.add("success");
}

async function cadastro(data) {
  try {
    const response = await api.post("/users/signup", data);
    console.log(response.data);

    if (response.status === 201) {
      localStorage.setItem("user", JSON.stringify(response.data.user));

      name.value = "";
      email.value = "";
      password.value = "";

      location.href = "login.html";
    }
  } catch (error) {
    console.error("Erro ao fazer cadastro.", error);
  }
}

formCadastro.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = {
    name: name.value,
    email: email.value,
    password: password.value,
  };

  if (!name.value) {
    setError(name, "Nome é obrigatório!");
  } else {
    setSuccess(name);
  }

  if (!email.value) {
    setError(email, "E-mail é obrigatório!");
  } else {
    setSuccess(email);
  }

  if (!password.value) {
    setError(password, "Senha é obrigatória!");
  } else {
    setSuccess(password);
  }

  if (data.name && data.email && data.password) {
    cadastro(data);
  }
});
