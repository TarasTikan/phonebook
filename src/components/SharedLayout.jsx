import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';

export const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
};
