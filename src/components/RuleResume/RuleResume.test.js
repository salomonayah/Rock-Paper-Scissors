import React from 'react';
import ReactDOM from 'react-dom';
import RuleResume from './RuleResume';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RuleResume />, div);
  ReactDOM.unmountComponentAtNode(div);
});