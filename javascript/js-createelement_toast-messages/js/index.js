console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

const toastMessages = [
  "Toast mit mittelaltem Gouda.",
  "Toast mit Butter und Marmelade.",
  "Toast mit Thunfisch und dick Mayo.",
  "Toast mit Hering und Erdbeeren.",
  "Toast mit Walnüssen und Spargel.",
];

addButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * toastMessages.length); // math.floor rundet zu der nächsten integer auf oder ab * math.random einer floating int zw 1 und 0 * länge des arrays;
  const randomToastMessage = toastMessages[randomIndex]; // random message ist gleich dem array mit random Index

  const newToast = document.createElement("ol"); // neues Element der ol
  newToast.classList.add("toast-container__message"); // class list des styles hinzufügen
  newToast.textContent = randomToastMessage; // ändern des text contents zur variablen der random toast message

  toastContainer.appendChild(newToast); // child appende zum toast container der die messages beinhaltet
});

clearButton.addEventListener("click", () => {
  // inner html des toast container löschen = leerer string
  toastContainer.innerHTML = "";
});
