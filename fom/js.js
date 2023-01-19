const textarea = document.getElementById('content');
const characterCount = document.getElementById('cCount');
const wordsCount = document.getElementById('wCount');

textarea.oninput = () => {
  let characters = textarea.value;
  characterCount.textContent = characters.replace(/\s/g, '').length;

  let words = textarea.value.split(' ').filter((item) => {
    return item != '';
  });
  wordsCount.textContent = words.length;
};