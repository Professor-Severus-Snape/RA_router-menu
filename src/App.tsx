import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import DriftPage from './pages/DriftPage/DriftPage';
import ForzaPage from './pages/ForzaPage/ForzaPage';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import TimeAttackPage from './pages/TimeAttackPage/TimeAttackPage';

const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      // TODO: выбрать какой вариант оставить - общую ошибку или ошибку внутри контейнера 'page'
      // NOTE: 1-ый вариант - родительский элемент с ошибкой
      // <Route path="/" element={<Layout />} errorElement={<NotFoundPage />}>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="drift" element={<DriftPage />} />
        <Route path="timeattack" element={<TimeAttackPage />} />
        <Route path="forza" element={<ForzaPage />} />
        {/*  NOTE: 2-ой вариант - страница не найдена - редирект */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    ),
    {
      // избавляет от множества warn в консоли:
      future: {
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
      },
    }
  );

  return (
    <RouterProvider
      router={routes}
      // избавляет от warn в консоли:
      future={{
        v7_startTransition: true,
      }}
    />
  );
};

export default App;
