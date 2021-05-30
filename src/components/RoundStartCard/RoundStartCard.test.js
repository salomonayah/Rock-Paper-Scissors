import React from 'react';
import ReactDOM from 'react-dom';
import RoundStartCard from './RoundStartCard';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RoundStartCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});