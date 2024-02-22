import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <Suspense fallback={<div>LOADING</div>}>
      <Outlet />
    </Suspense>
  );
};
