import React from 'react'
import { Routes, Route } from 'react-router-dom'

import * as Pages from 'pages'

export const Paths = {
  Home: '/',

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
  SingleProduct: (id = ':id') => `/catalogue/id/${id}`,
}

export const ROUTES = () => (
  <Routes>
    <Route path={Paths.Home} element={<Pages.Home />} />
    <Route path={Paths.Login} element={<Pages.Auth />} />
    <Route path={Paths.Register} element={<>Register</>} />
    <Route path={Paths.ForgotPassword} element={<>ForgotPassword</>} />
    <Route path={Paths.User} element={<Pages.User />} />
    <Route path={Paths.Pigs} element={<Pages.Pig />} />
    <Route path={Paths.Catalogue} element={<Pages.Catalogue />} />
    <Route path={Paths.Accounting} element={<Pages.Accounting />} />
    <Route path={Paths.Health} element={<Pages.Health />} />
    <Route path={Paths.Feeding} element={<Pages.Feeding />} />
    <Route path={Paths.Events} element={<Pages.Events />} />
    <Route path={Paths.AddPig} element={<Pages.AddPig />} />
    <Route path={Paths.Breeding} element={<Pages.Breeding />} />
    <Route path={Paths.NotFound} element={<>NotFound</>} />
    <Route path={Paths.SingleEvent()} element={<>SingleEvent</>} />
    <Route path={Paths.SinglePig()} element={<Pages.SinglePigList />} />
    <Route path={Paths.SingleProduct()} element={<>SingleProduct</>} />
    <Route path={Paths.NotFound} element={<>404</>} />
    <Route path="*" element={<>404</>} />
  </Routes>
)

export default ROUTES
