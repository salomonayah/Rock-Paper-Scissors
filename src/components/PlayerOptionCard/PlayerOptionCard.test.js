import React from 'react';
import ReactDOM from 'react-dom';
import PlayerOptionCard from './PlayerOptionCard';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PlayerOptionCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});