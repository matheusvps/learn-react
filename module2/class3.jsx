import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
// Inserting curly braces around elements in html will make they be treated as javascript. "Injecting" javascript
root.render(<h1>{2 + 3}</h1>);
