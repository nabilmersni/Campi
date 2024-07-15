import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LandingPage from './pages/LandingPage';

const router = createBrowserRouter([
  {
    path: '',
    element: <LandingPage />,
  },
]);

function App() {
  return (
    <div className="font-nunito">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
