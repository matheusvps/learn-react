import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
/*Prints 2+3 because JSX will read content inside h1 like ordinary html. If I want to treat it like 
Javascript, I had to put curly braces like the example in next class*/
root.render(<h1>2 + 3</h1>);
