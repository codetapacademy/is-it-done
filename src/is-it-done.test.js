import React from 'react';
import ReactDOM from 'react-dom';
import IsItDone from './is-it-done';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<IsItDone />, div);
  ReactDOM.unmountComponentAtNode(div);
});
