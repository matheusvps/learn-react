import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

const myList = (
  <ul>
    <li> Test 1 </li>
    <li> Test 2 </li>
    <li> Test 3 </li>
  </ul>
);

root.render(myList);