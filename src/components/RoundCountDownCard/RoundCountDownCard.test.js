import React from 'react';
import ReactDOM from 'react-dom';
import RoundCountDownCard from './RoundCountDownCard';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RoundCountDownCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});