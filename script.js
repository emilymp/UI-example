function toggleVis() {
  var answer = document.getElementById('answer');
  var button = document.getElementById('answerButton')
  var currentDisplay = answer.style.display;

  if (currentDisplay === 'block') {
    answer.style.display = 'none';
    button.innerText = 'Show Answer';
  }

  else {
    answer.style.display = 'block';
    button.innerText = 'Hide Answer';

  }
}
