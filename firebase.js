import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC9eC7lQs0OT9hQWkOUP4q5ZuJ8vRFQr54",
  authDomain: "mc-brecho.firebaseapp.com",
  projectId: "mc-brecho",
  storageBucket: "mc-brecho.firebasestorage.app",
  messagingSenderId: "471255548659",
  appId: "1:471255548659:web:cebdbcf01159705a6b2d86"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Cadastro
const cadastroBtn = document.getElementById("cadastroBtn");
if (cadastroBtn) {
  cadastroBtn.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    createUserWithEmailAndPassword(auth, email, senha)
      .then(() => {
        alert("Cadastro realizado com sucesso!");
        window.location.href = "index.html";
      })
      .catch(err => alert("Erro: " + err.message));
  });
}

// Login
const loginBtn = document.getElementById("loginBtn");
if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    signInWithEmailAndPassword(auth, email, senha)
      .then(() => {
        alert("Login realizado!");
        window.location.href = "index.html";
      })
      .catch(err => alert("Erro: " + err.message));
  });
}
