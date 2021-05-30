import React from 'react';
import ReactDOM from 'react-dom';
import RoundResultCard from './RoundResultCard';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RoundResultCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});