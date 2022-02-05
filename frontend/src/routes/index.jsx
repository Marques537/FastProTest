import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Fragment } from 'react';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { Home } from '../pages/Home';
import  StoreProvider from '../components/Store/Provider'
import RoutesPrivate from '../components/Routes/Private' 

export const AppRoutes = () => {
  return (
    <Router>
      <StoreProvider>
      <Fragment>
        <Routes>
          <Route path='/login' exact element={<Login />} />
          <Route path='/register' exact element={<Register />} />
          <Route path='/' exact element={<RoutesPrivate/>}>
            <Route path='/' exact element={<Home />} />
          </Route>
          
        </Routes>
        </Fragment>
      </StoreProvider>
    </Router>
  )
}