"us direct";
const Account = function (login, email) {
  this.login = login;
  this.email = name;
};
Account.prototype.getInfo = function () {
  console.log(this.login, this.email);
};

console.log(Account.prototype.getInfo);

const mango = new Account({
  login: "Mangozedog",
  email: "mango@dog.woof",
});

mango.getInfo();

const poly = new Account({
  login: "Poly",
  email: "poly@mail.com",
});

poly.getInfo(); 
