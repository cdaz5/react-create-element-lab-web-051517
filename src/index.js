import React from 'react';
import ReactDOM from 'react-dom';


const myh1 = React.createElement('h1', {}, 'An Awesome Person')

const myp = React.createElement('p', {}, 'Who is learning React')

const myul = React.createElement('ul', { className: 'my-interests'},
  [
    React.createElement('li', {}, 'JavaScript'),
    React.createElement('li', {}, 'React'),
    React.createElement('li', {}, 'Movies'),
    React.createElement('li', {}, 'Ice cream')
  ]
)

const meInReact = React.createElement('div', { className: 'me' }, [myh1, myp, myul]);

ReactDOM.render(
  meInReact,
  document.getElementById('root')
);

export default meInReact
