const registrationForm = document.getElementById("registrationForm");
const message = document.getElementById("message");

registrationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email=="admin" && password=="adminps"){
        alert(`${username}, вошел в аккаунт.Добро пожаловать!`)
    } else {
        alert("Неверные данные! или пользоавтель не зарегестрирован!")
    }
    
});