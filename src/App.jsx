import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './routes/Home';
import { Detail } from './routes/Detail';
import { ErrorPage } from './error-page';

const App = createBrowserRouter([
  {
    path: `${process.env.PUBLIC_URL}/`,
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: `${process.env.PUBLIC_URL}/movie/:movieId`,
    element: <Detail />,
    errorElement: <ErrorPage />,
  },
]);

export default App;
