import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './routes/Home';
import { Detail } from './routes/Detail';
import { ErrorPage } from './error-page';

const App = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'movie/:movieId',
    element: <Detail />,
    errorElement: <ErrorPage />,
  },
]);

export default App;
