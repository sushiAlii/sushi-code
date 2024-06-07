import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import HomeLayout from './layouts/HomeLayout';
import { Home } from './pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<HomeLayout />}>
      <Route index element={<Home />} />
    </Route>,
  ),
);

export default router;
