const containerCurrent = document.querySelector('.current-forecast');
const containerForecasts = document.querySelector('.forecasts');
const button = document.querySelector('.forecast-btn');
const currentForecastContent = document.querySelector('.current-forecast h1');
const currentForecastPercent = document.querySelector('.current-forecast p');
const cardTemplate = document.querySelector('#forecast-item');
const content = ['JS-станет твоим лучшим другом!','Станешь крепким junior', 'Хорошо изучишь React'];

function generateContent() {
  button.addEventListener('click',() => {

    
    let newContent = content[generate(0, (content.length + 1))];
    let newPercent = generate(0,100);
    
    console.log(newContent);
    console.log(newPercent);
    
    currentForecastContent.textContent = '';
    currentForecastPercent.textContent = '';
    currentForecastContent.textContent = newContent;
    currentForecastPercent.textContent = `Вероятность ${newPercent} %`;
    const saveContent = currentForecastContent.textContent;
    const savePersent = currentForecastPercent.textContent;

    const textCard = templateAdd(saveContent,savePersent);

    return containerForecasts.prepend(textCard)
    
  })
}

generateContent()

function generate(min,max) {
  return Math.floor(Math.random * (max - min + 1) + min);
}


function templateAdd(itemContent, itemPercent) {
  const myCard = cardTemplate.content.cloneNode(true);

  myCard.querySelector('h3').textContent = itemContent;
  myCard.querySelector('p').textContent = itemPercent;

  return myCard;
}