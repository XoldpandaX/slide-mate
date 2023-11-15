import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { initUiKit } from '@/lib/ui-kit';
import { router } from './core/router/router';

import './main.scss';

initUiKit();
createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
);
