import React from 'react';
import ReactDOM from 'react-dom';
import RoundInfoCard from './RoundInfoCard';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RoundInfoCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});