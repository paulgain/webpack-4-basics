import './assets/css/font.css';
import './assets/css/styles.css';
import Icon from './assets/img/webpack.png';

function component() {
  const element = document.createElement('div');

  const p = document.createElement('p');
  p.innerHTML = 'Webpack 4 basics';
  p.classList.add('basics');
  element.appendChild(p);

  const myIcon = new Image();
  myIcon.src = Icon;
  myIcon.classList.add('webpack');
  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
