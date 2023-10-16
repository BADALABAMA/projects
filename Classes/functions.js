export function updateAgeByYear(human, ageElement) {
  if (human.age !== 65) {
    human.age += 1;
    ageElement = document.querySelector('#ageElement');
    if (ageElement) {
      ageElement.textContent = `Age: ${human.age}`;
    }
  }
}

export function updateAgeByMonth(human, ageElement) {
  if (human.age !== 65) {
    human.age += 1 / 12;
    ageElement = document.querySelector('#ageElement');
    if (ageElement) {
      ageElement.textContent = `Age: ${human.age.toFixed(1)}`;
    }
  }
}
