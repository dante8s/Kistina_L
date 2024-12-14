// Імпорт функцій з Firebase SDK через CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
import { getDatabase, ref, set, push } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

// Конфігурація Firebase вашого веб-додатка
const firebaseConfig = {
    apiKey: "AIzaSyAWdUHmrdLNdMEhUfnxilJzrOzXma3aiuU",
    authDomain: "logopedkz-136ab.firebaseapp.com",
    databaseURL: "https://logopedkz-136ab-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "logopedkz-136ab",
    storageBucket: "logopedkz-136ab.firebasestorage.app",
    messagingSenderId: "493188863725",
    appId: "1:493188863725:web:fa53a4e0994b50a3629ee4",
    measurementId: "G-0EFCNL2ZSH"
};

// Ініціалізація Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Запобігаємо стандартній дії форми
    validateForm(); // Викликаємо функцію валідації форми
});

function validateForm() {
    var email = document.getElementById('email').value;
    var consent = document.getElementById('consent').checked;

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // Регулярний вираз для валідації email
    if (!emailPattern.test(email)) {
        alert("Prosím, zadajte platnú emailovú adresu."); // Повідомлення про невірний email
        return false;
    }

    if (!consent) {
        alert("Musíte súhlasiť со spracованím особных údajов."); // Повідомлення про необхідність згоди
        return false;
    }

    submitForm(); // Якщо всі поля валідні, відправляємо форму
    return true;
}

function submitForm() {
    var meno = document.getElementById('meno').value;
    var email = document.getElementById('email').value;
    var text = document.getElementById('textarea').value;
    var consent = document.getElementById('consent').checked;

    // Використання fetch API для відправки запиту
    fetch('https://logopedkz-136ab-default-rtdb.europe-west1.firebasedatabase.app/forms.json', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            meno: meno,
            email: email,
            text: text,
            consent: consent
        })
    }).then(function(response) {
        if (response.ok) {
            // Відображення повідомлення про успішне відправлення
            document.getElementById('successMessage').style.display = 'block';
            // Очищення форми
            document.getElementById('myForm').reset();
        } else {
            return response.json().then(function(data) {
                throw new Error(data.error.message);
            });
        }
    }).catch(function(error) {
        console.error("Error writing new message to database", error); // Обробка помилок
    });
}

// Функція для анімації кнопки навігації
function myFunction(x) {
    x.classList.toggle("change");
    document.querySelector(".nav-items").classList.toggle("hide-show");
}

document.querySelector(".nav-button").addEventListener("click", function() {
    myFunction(this);
});
///s
function copyEmailToClipboard() {
    const email = 'example@example.com';
    navigator.clipboard.writeText(email).then(() => {
        alert('Email скопійовано в буфер обміну: ' + email);
    }).catch(err => {
        console.error('Не вдалося скопіювати: ', err);
    });
  }
  
  function copyPhoneToClipboard() {
    const phone = '+1234567890';
    navigator.clipboard.writeText(phone).then(() => {
        alert('Телефон скопійовано в буфер обміну: ' + phone);
    }).catch(err => {
        console.error('Не вдалося скопіювати: ', err);
    });
  }


