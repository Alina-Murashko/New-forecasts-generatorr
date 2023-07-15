const button = document.querySelector('.forecast-btn');
const currentForecastContent = document.querySelector('.current-forecast h1');
const currentForecastPercent = document.querySelector('.current-forecast p');
const template = document.querySelector('.forecast-item');
const content = ['JS-станет твоим лучшим другом!','Станешь крепким junior', 'Хорошо изучишь React'];

function generateContent() {
  button.addEventListener('click',() => {
    if(currentForecastContent.textContent === '' && currentForecastPercent.textContent === '') {
      const newContent = content[generateContent(0, content.length + 1)];
      const newPercent = generatePercent();
      currentForecastContent.textContent = newContent;
      currentForecastPercent.textContent = newPercent + `${%}`;
    }

    
  })
}

function generateContent(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random * (max - min + 1) + min);
}

function generatePercent(max = 100) {
  return MathFloor(Math.random*max);
}

function templateAdd() {

}