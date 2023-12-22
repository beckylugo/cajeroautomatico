

let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
const logoutButton = document.getElementById("logoutButton");

logoutButton.addEventListener("click", function (event) {
  localStorage.removeItem("loggedUser");
  return (location.href = "./index.html");
});

const users = [
 user1= { mail: "barbie@gmail.com", password: "barb123", balance: 500 },
 user2= { mail: "courtney@gmail.com", password: "court456", balance: 300 },
 user3= { mail: "madison@gmail.com", password: "mad789", balance: 700 },
];
class User {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }

  checkBalance() {
    return alert(`El saldo de ${this.name} es: $${this.balance}`);
  }
  

  deposit(amount) {
    if (10 <= this.balance - amount && this.balance - amount <= 990 && amount > 0) {
      this.balance += amount;
      return alert(`Se depositaron $${amount}. El nuevo saldo de ${this.name} es de: $${this.balance}`);
    } else {
      return alert("No se pudo realizar el depósito");
    }
  }

  withdraw(amount) {
    if (10 <= this.balance - amount && this.balance - amount <= 990 && amount > 0) {
      this.balance -= amount;
      return alert(`Se retiraron $${amount}. El nuevo saldo de ${this.name} es de: $${this.balance}`);
    } else {
      return alert("No se pudo realizar el retiro");
    }
  }
}


function displayActionResult(message) {
  const resultDiv = document.getElementById('actionResult');
  resultDiv.innerHTML = message;
}
function displayUserImage() {
  const selectedUser = document.getElementById('users').value;
  const userImage = document.getElementById('userImage');

  switch (selectedUser) {
    case 'user0':
      userImage.src = 'images/atm.png';
      break;
    case 'user1':
      userImage.src = 'images/b1.png';
      break;
    case 'user2':
      userImage.src = 'images/b2.png';
      break;
    case 'user3':
      userImage.src = 'images/b3.png';
      break;
    default:
      userImage.src = '';
      break;
  }
}
function checkBalance() {
  const selectedUser = document.getElementById('users').value;
  let user;
  switch (selectedUser) {
    case 'user1':
      user = new User("Barbie", 500);
      break;
    case 'user2':
      user = new User("Courtney", 300);
      break;
    case 'user3':
      user = new User("Madison", 700);
      break;
    default:
      break;
  }
  displayActionResult(user.checkBalance());
}

function makeDeposit() {
  const selectedUser = document.getElementById('users').value;
  const amount = parseFloat(prompt("Ingresa cantidad a depositar: $"));
  let user;
  switch (selectedUser) {
    case 'user1':
      user = new User("Barbie", 500);
      break;
    case 'user2':
      user = new User("Courtney", 300);
      break;
    case 'user3':
      user = new User("Madison", 700);
      break;
    default:
      break;
  }
  displayActionResult(user.deposit(amount));
}

function makeWithdrawal() {
  const selectedUser = document.getElementById('users').value;
  const amount = parseFloat(prompt("Ingresa cantidad a retirar: $"));
  let user;
  switch (selectedUser) {
    case 'user1':
      user = new User("Barbie", 500);
      break;
    case 'user2':
      user = new User("Courtney", 300);
      break;
    case 'user3':
      user = new User("Madison", 700);
      break;
    default:
      break;
  }
  displayActionResult(user.withdraw(amount));
}