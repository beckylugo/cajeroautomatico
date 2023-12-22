let oldUser = JSON.parse(localStorage.getItem("loggedUser"));
if (oldUser) {
  location.href = "./home.html";
}

const users = [
  { mail: "barbie@gmail.com", password: "barb123" },
  { mail: "courtney@gmail.com", password: "court456"},
  { mail: "madison@gmail.com", password: "mad789"},
];


const userInput = document.getElementById("userinput");
const passwordInput = document.getElementById("passwordinput");
const loginButton = document.getElementById("loginButton");

/* Evento de escucha */
let loggedUser = null;
let userValue = "";
let passValue = "";

userInput.addEventListener("change", function (event) {
  userValue = event.target.value;
  console.log(userValue);
});

passwordInput.addEventListener("change", function (event) {
  passValue = event.target.value;
  console.log(passValue);
});

/* LOGIN CON UN SOLO USUARIO EN UNA VARIABLE */
// loginButton.addEventListener("click", function (event) {
//   if (userValue === user1.mail && passValue === user1.password) {
//     alert("Usuario logueado correctamente");
//   } else {
//     alert("El usuario o la contraseña son incorrectos");
//   }
// });

/* LOGIN PARA MUCHOS USUARIOS EN UN ARRAY CON FOR */

// loginButton.addEventListener("click", function (event) {
//   for (let i = 0; i < users.length; i++) {
//     const user = users[i]; //=>  { mail: "lauta@gmail.com", password: "abc123" }

//     if (userValue === user.mail && passValue === user.password) {
//       loggedUser = user;
//       return alert("Usuario logueado correctamente");
//     }
//   }
// });

/* LOGIN PARA MUCHOS USUARIOS EN UN ARRAY CON FIND */
loginButton.addEventListener("click", function (event) {
  let foundUser = users.find(
    (user) => user.mail === userValue && user.password === passValue
  ); //{ mail: "lauta@gmail.com", password: "abc123" }

  console.log("found user", foundUser);

  if (foundUser) {
    loggedUser = foundUser;

    localStorage.setItem("loggedUser", JSON.stringify(loggedUser));

    return (location.href = "./home.html");
  } else {
      alert("Usuario y/o contraseña incorrectos");
     }
});
