import React from 'react';
import ReactDOM from 'react-dom';
import GameMainPage from './GameMainPage';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GameMainPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});