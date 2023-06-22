import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './core/router/router';

import './main.scss';

createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <RouterProvider router={router} />
);
