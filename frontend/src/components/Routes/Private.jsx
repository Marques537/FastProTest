import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import StoreContext from '../Store/Context';

const RoutesPrivate = () => {
  const { token } = useContext(StoreContext);
  return (
    token
      ? <Outlet />
      : <Navigate to="/login" />
  )
}
export default RoutesPrivate;