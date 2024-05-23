const formulaire = document.getElementById("loginform");
const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnlink = document.querySelector(".btnLogin");
const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const menu = document.querySelector(".menu");

toggleBtn.onclick = function () {
  menu.classList.toggle("open");
  const isOpen = menu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btnlink.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

formulaire.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.getElementById("email");
  const password = document.getElementById("password");

  const response = await fetch("http://localhost:3000/login", {
    method: "POST",
    body: JSON.stringify({ email:email.value, password:password.value }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    const result = await response.json()
    const token = result.token
  
    localStorage.setItem("token", token)
    window.location.href = "./profile.html"
  }
});

const registerform = document.getElementById("registerform")
const registerpassword = document.getElementById("registerpassword")
const registeremail = document.getElementById("registeremail")
const name = document.getElementById("name")

registerform.addEventListener("submit", async (event) => {
  event.preventDefault()

  const response = await fetch("http://127.0.0.1:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: registeremail.value,
      name: name.value,
      password: registerpassword.value,
    }),
  })

  if (response.ok) {
    window.location.href = "./profile.html"
  }
})
