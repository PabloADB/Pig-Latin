const form = document.getElementById('form');
const input = document.getElementById('input');
const output = document.getElementById('output');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const word = input.value.trim();
  const pigLatin = translateToPigLatin(word);

  output.innerHTML = pigLatin;
});

function translateToPigLatin(word) {
  if (!word) return '';

  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let pigLatin = '';

  if (vowels.includes(word[0])) {
    pigLatin = word + 'way';
  } else {
    let i = 0;
    while (!vowels.includes(word[i])) {
      i += 1;
    }
    pigLatin = word.slice(i) + word.slice(0, i) + 'ay';
  }

  return pigLatin;
}