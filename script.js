function getQuote() {
  fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then((data) => {
      var id = document.getElementById('id');
      var advice = document.getElementById('advice');
      id.innerHTML = data.slip.id
      advice.innerHTML = data.slip.advice
      return console.log(data.slip);
    });
}