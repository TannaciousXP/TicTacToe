import React from 'react';
import { render } from 'react-dom';
import App from '../src/App';

descibe('Should render without crashing', () => {
  const div = document.createElement('div');
  render(<App />, div);
});

