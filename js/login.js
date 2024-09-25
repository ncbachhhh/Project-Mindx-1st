const KEY_USERS = "users";
let users = [];
users = [...users];
let addUser = {
  username: "",
  email: "",
  password: "",
};

const listUser = localStorage.getItem(KEY_USERS) ? JSON.parse(localStorage.getItem(KEY_USERS)) : [];

const elUserName_login = document.getElementById("username_login");
const elPassword_login = document.getElementById("password_login");
const btnLogin = document.getElementById("btnLogin");

// click login, register
btnLogin.addEventListener("click", onClickLogin);

// function login, register
function onClickLogin(event) {
  event.preventDefault();
  const checkListUser = localStorage.getItem(KEY_USERS) ? JSON.parse(localStorage.getItem(KEY_USERS)) : [];
  if (checkListUser.length > 0) {
    // check username
    const user = checkListUser.find((user) => user.username == elUserName_login.value);
    // success login
    if (!!user && user.password == elPassword_login.value) {
      alert("Dang nhap thanh cong");
    }
    // fail login
    else {
      alert("Sai password hoac khong co tai khoan");
    }
  }
  return;
}
