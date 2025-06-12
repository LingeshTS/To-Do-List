import React from 'react';
import {createRoot} from 'react-dom/client';
import TodoApp from './ToDoApp';

const root=createRoot(document.getElementById('root'));
root.render(<TodoApp/>);