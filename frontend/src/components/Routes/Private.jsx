import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import StoreContext from '../Store/Context';

const RoutesPrivate = () => {
  const { token } = useContext(StoreContext);
//valido o meu token na api enviar o token e ver se ele é valido ainda
  return (
    token
      ? <Outlet />
      : <Navigate to="/login" />
  )
}
export default RoutesPrivate;