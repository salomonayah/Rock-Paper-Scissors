import React from 'react';
import ReactDOM from 'react-dom';
import GameWelcomePage from './GameWelcomePage';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GameWelcomePage />, div);
  ReactDOM.unmountComponentAtNode(div);
});