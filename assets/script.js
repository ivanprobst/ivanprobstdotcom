// Const
const colorSchemes = [
  {primary: '#fb9b2a', secondary: '#0c00ff'},
  {primary: '#e44a66', secondary: '#78a15d'},
  {primary: '#354596', secondary: '#15a29c'},
  {primary: '#126b8b', secondary: '#feb904'},
  {primary: '#e6625e', secondary: '#0bbcd6'},
  {primary: '#005397', secondary: '#ff8788'}
]

const diceList = [
  '<i class="fas fa-dice-one"></i>',
  '<i class="fas fa-dice-two"></i>',
  '<i class="fas fa-dice-three"></i>',
  '<i class="fas fa-dice-four"></i>',
  '<i class="fas fa-dice-five"></i>',
  '<i class="fas fa-dice-six"></i>'
]

const schemeSelectors = [
  {
    element: 'strong',
    style: 'color',
    color: 'primary'
  },
  {
    element: 'h1',
    style: 'backgroundColor',
    color: 'primary'
  },
  {
    element: '#color-dice-container',
    style: 'backgroundColor',
    color: 'primary'
  },
  {
    element: '#skills i',
    style: 'color',
    color: 'primary'
  },
  {
    element: '.project > div > div',
    style: 'borderLeftColor',
    color: 'primary'
  },
  {
    element: 'footer',
    style: 'backgroundColor',
    color: 'primary'
  },
  {
    element: 'body',
    style: 'borderTopColor',
    color: 'primary'
  },
  {
    element: 'a',
    style: 'color',
    color: 'secondary'
  },
  {
    element: 'h2',
    style: 'backgroundColor',
    color: 'secondary'
  },
  {
    element: 'h4',
    style: 'color',
    color: 'primary'
  },
  {
    element: 'section',
    style: 'borderTopColor',
    color: 'secondary'
  },
  {
    element: '#skills hr',
    style: 'borderTopColor',
    color: 'secondary'
  }
]

// Helpers
const applyColorScheme = (currentColorScheme) => {
  schemeSelectors.forEach(selector => {
    Array.from(document.querySelectorAll(selector.element)).forEach(element => {
      element.style[selector.style] =  colorSchemes[currentColorScheme][selector.color];
      element.style.transition = 'color 2s ease, background-color 2s ease, border-color 2s ease';
    })
  });
}

let throwIsRunning = false;
const throwColorDice = () => {
  if(!throwIsRunning){
    throwIsRunning = true;
    const currentColorScheme = Math.floor(Math.random() * colorSchemes.length);

    applyColorScheme(currentColorScheme);

    const diceElement = document.getElementById('color-dice');
    diceElement.classList.add('rotateStart');
    setTimeout(() => {
      diceElement.innerHTML = diceList[currentColorScheme];
      setTimeout(() => {
        diceElement.classList.remove('rotateStart');
        throwIsRunning = false;
      }, 1000);
    }, 1000);
  }
}

// Init
throwColorDice();
document.getElementById('color-dice').onclick = throwColorDice;