const allCheckBoxes = [
  ...document.querySelectorAll('.inbox input[type="checkbox"]'),
];

let lastClicked;

function checkHandler(e) {
  let middleElements = false;

  if (e.shiftKey && this.checked) {
    allCheckBoxes.map((checkbox) => {
      if (checkbox === this || checkbox === lastClicked) {
        middleElements = !middleElements;
      }
      if (middleElements) {
        checkbox.checked = true;
      }
    });
  }
  lastClicked = this;
}

allCheckBoxes.map((checkbox) =>
  checkbox.addEventListener('click', checkHandler)
);







