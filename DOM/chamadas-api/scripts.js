// const promessa = new Promise((resolve, reject) => {
//   const condicao = true;
//   if (condicao) {
//     setTimeout(() => {
//       resolve("Estou resolvida.");
//     }, 2000);
//   } else {
//     reject("Ocorreu um erro.");
//   }
// });

// promessa
//   .then((resultado) => console.log(resultado))
//   .catch((error) => console.log(error));

// usando try e catch
// async function fetchUsers() {
//   try {
//     const response = await axios.get("https://reqres.in/api/users");
//     const users = response.data.data;
//     console.log(users);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("Finalizou!");
//   }
// }

// fetchUsers();

// usando then
async function fetchUsers() {
  axios
    .get("https://reqres.in/api/users")
    .then((response) => {
      const users = response.data.data;
      console.log(users);
    })
    .catch((error) => console.error("Erro ao buscar usuários", error))
    .finally(() => console.log("Finalizou"));
}

fetchUsers();
