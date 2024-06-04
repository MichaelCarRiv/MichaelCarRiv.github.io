const gridItems = document.querySelectorAll('.grid-item');
const message = document.getElementById('message');
let foundCount = 0;
const totalCards = 3; // Cambia este número para ajustar cuántas cartas se necesitan encontrar

gridItems.forEach(item => {
  item.addEventListener('click', function() {
    if (!this.classList.contains('revealed')) {
      this.classList.add('revealed');
      this.textContent = '💌';
      foundCount++;
      checkWin();
    }
  });
});

function checkWin() {
  if (foundCount === totalCards) {
    message.classList.remove('hidden');
  }
}

function accept() {
  alert("¡Qué felicidad! 💖");
}

function decline() {
  alert("Oh, qué pena. 😢");
}
