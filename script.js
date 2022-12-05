const counterElement = document.querySelector(".counter");
const incrementButtonElement = document.getElementById("incrmBtn");
const decrementButtonElement = document.getElementById("decrmBtn");
const saveButtonElement = document.getElementById("saveBtn");
const recordDisplay = document.querySelector(".recordExhibit");
const resetButton = document.querySelector(".reset");
let countValue = 0;

incrementButtonElement.addEventListener("click", () => {
  countValue = countValue + 1;
  counterElement.innerHTML = countValue;
});

decrementButtonElement.addEventListener("click", () => {
  if (countValue < 1) {
    decrementButtonElement.disabled = true;
  } else if (countValue) {
    countValue = countValue - 1;
    counterElement.innerHTML = countValue;
  }
  decrementButtonElement.disabled = false;
});

let numOfClicks = 0;

function saveRecords() {
  let finalRecordContainer = countValue + "-";
  recordDisplay.innerHTML += finalRecordContainer;
  numOfClicks += 1;

  if (numOfClicks > 2) {
    saveButtonElement.disabled = true;
    document.querySelector(".reset").style.display = "block";
  }
}
resetButton.addEventListener("click", () => {
  countValue = 0;
  numOfClicks = 0;
  counterElement.innerHTML = countValue;
  recordDisplay.innerHTML = "";
  saveButtonElement.disabled = false;
  document.querySelector(".reset").style.display = "none";
});
