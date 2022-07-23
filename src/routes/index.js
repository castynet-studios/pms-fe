import React from 'react';
import { Routes, Route } from 'react-router-dom';

//pages
import SinglePigList from 'pages/singlePigList/singlePigList';
import AddNewPig from 'pages/addNewPig/addNewPig';

import Auth from 'pages/auth/auth';
import Events from 'pages/events/events';

const Paths = {
  Home: '/',
  Dashboard: '/dashboard',

  Login: '/login',
  Register: '/register',
  ForgotPassword: '/forgot-password',

  User: '/user',
  Pigs: '/pigs',
  Catalogue: '/catalogue',
  Accounting: '/accounting',
  Health: '/health',
  Feeding: '/feeding',
  Events: '/events',
  Breeding: '/breeding',

  AddPig: '/pigs/edit',
  NotFound: '/404',

  SinglePig: (id = ':id') => `/pigs/id/${id}`,
  SingleEvent: (id = ':id') => `/events/id/${id}`,
  SingleProduct: (id = ':id') => `/catalogue/id/${id}`
};

export const ROUTES = () => (
  <Routes>
    <Route path={Paths.Home} element={<>homes</>} />
    <Route path={Paths.Dashboard} element={<>dashboard</>} />
    <Route path={Paths.Login} element={<Auth />} />
    <Route path={Paths.Register} element={<>Register</>} />
    <Route path={Paths.ForgotPassword} element={<>ForgotPassword</>} />
    <Route path={Paths.User} element={<>User</>} />
    <Route path={Paths.Pigs} element={<>Pigs</>} />
    <Route path={Paths.Catalogue} element={<>Catalogue</>} />
    <Route path={Paths.Accounting} element={<>Accounting</>} />
    <Route path={Paths.Health} element={<>Health</>} />
    <Route path={Paths.Feeding} element={<>Feeding</>} />
    <Route path={Paths.AddPig} element={<AddNewPig />} />
    <Route path={Paths.Events} element={<Events />} />
    <Route path={Paths.Breeding} element={<>Breeding</>} />
    <Route path={Paths.NotFound} element={<>NotFound</>} />
    <Route path={Paths.SingleEvent()} element={<>SingleEvent</>} />
    <Route path={Paths.SinglePig()} element={<SinglePigList />} />
    <Route path={Paths.SingleProduct()} element={<>SingleProduct</>} />
    <Route path={Paths.NotFound} element={<>404</>} />
    <Route path="*" element={<>404</>} />
  </Routes>
);
export default ROUTES;
