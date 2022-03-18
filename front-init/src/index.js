import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Composants
import App from 'src/components/App';

// == Render
// Root React element (the one that contains the whole app)
// => creates a structures of nested objects
const rootReactElement = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
// The DOM target (where the structure should come to life in the DOM)
const target = document.getElementById('root');
//React rendering trigger (virtual) => DOM (web page)
render(rootReactElement, target);
