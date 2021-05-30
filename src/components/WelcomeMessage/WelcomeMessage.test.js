import React from 'react';
import ReactDOM from 'react-dom';
import WelcomeMessage from './WelcomeMessage';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WelcomeMessage />, div);
  ReactDOM.unmountComponentAtNode(div);
});