import { createBrowserRouter } from 'react-router-dom';
import { App } from '@/core/app/app';
import { AuthPage } from '@/pages/auth/lazy';
import { EditorPage } from '@/pages/editor/lazy';
import { RouterSuspense } from './router-suspense';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>error</div>,
    children: [
      {
        path: 'auth',
        element: (
          <RouterSuspense>
            <AuthPage />
          </RouterSuspense>
        ),
      },
      {
        path: 'editor',
        element: (
          <RouterSuspense>
            <EditorPage />
          </RouterSuspense>
        ),
      },
    ],
  },
]);
