import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout.jsx';
const Home = lazy(() => import('../pages/HomePage.jsx'));
const FavouritePage = lazy(() => import('../pages/FavouritePage.jsx'));
const CatalogPage = lazy(() => import('../pages/CatalogPage.jsx'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favourite" element={<FavouritePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
