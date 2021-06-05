import React from 'react';
import ReactDOM from 'react-dom';
import RoundCompareCard from './RoundCompareCard';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RoundCompareCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});