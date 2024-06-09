import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import HomeLayout from './layouts/HomeLayout';
import { CodeLanguage, Home } from './pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<HomeLayout />}>
      <Route index element={<Home />} />
      <Route path="code/:language" element={<CodeLanguage />} />
    </Route>,
  ),
);

export default router;
