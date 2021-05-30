import React from 'react';
import ReactDOM from 'react-dom';
import ScoreboardCard from './ScoreboardCard';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ScoreboardCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});