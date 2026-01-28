const characters = [
  ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  ..."abcdefghijklmnopqrstuvwxyz",
  ..."0123456789",
  ..."~`!@#$%^&*()_-+=[]{},|:;<>.?/"
];

const passwordLength = 15;

function generateRandomPassword() {
  let result = "";
  for (let i = 0; i < passwordLength; i++) {
    // Wähle jedes Zeichen per Zufall
    const idx = Math.floor(Math.random() * characters.length);
    result += characters[idx];
  }
  return result;
}

// DOM-Elemente referenzieren
const passwordField = document.getElementById("passwordField");
const generateBtn = document.getElementById("generate-btn");


// Beim Klick Passwort generieren
generateBtn.addEventListener("click", () => {
  passwordField.value = generateRandomPassword();
  copyMessage.textContent = "";
});

//erstellt mit Hilfe von KI