const userContainer = document.querySelector(".user-list");
const loadingIndicator = document.querySelector(".loading");

async function createUser() {
  const data = {
    name: "Gabriel Marini",
    job: "Programador",
  };

  try {
    const response = await api.post("/users", data);
    console.log(response.data);
  } catch (error) {
    console.error("Erro: ", error);
  }
}

createUser();

async function fetchUsers() {
  loadingIndicator.style.display = "block";

  try {
    const response = await api.get("/users");
    const users = response.data.data;

    users.forEach((user) => {
      const userCard = document.createElement("div");
      userCard.classList.add("user-card");
      userCard.innerHTML = `
            <img src="${user.avatar}" alt="${user.first_name} ${user.last_name}" />
            <h2>${user.first_name} ${user.last_name}</h2>
            <p>E-mail: ${user.email}</p>
        `;

      userContainer.appendChild(userCard);
    });

    console.log(users);
  } catch (error) {
    console.error("Erro: ", error);
  } finally {
    loadingIndicator.style.display = "none";
  }
}

fetchUsers();
