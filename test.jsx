import React from 'react';
import { createRoot } from 'react-dom/client';

//Selects HTML app with "app" id
const container = document.getElementById('app');

/* createRoot is from react concurrent. Creates a root in order to display
react components inside it */
const root = createRoot(container);

//render something inside root
root.render(<h1>Hello world</h1>);