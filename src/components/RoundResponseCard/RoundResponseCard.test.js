import React from 'react';
import ReactDOM from 'react-dom';
import RoundResponseCard from './RoundResponseCard';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RoundResponseCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});