import React from "react";
import { Routes, Route } from "react-router-dom";

import Auth from "pages/auth/auth";
import Home from "pages/home/home";
import Dashboard from "pages/dashboard/dashboard";
import Pig from "pages/pigList/pigList";
import Catalogue from "pages/catalogue/catalogue";
import Accounting from "pages/Accounts/accounts";
import Health from "pages/health/health";
import Feeding from "pages/feeding/feeding";
import Breeding from "pages/breeding/breeding";
import Events from "pages/events/events";
import AddPig from "pages/addPig/addPig";
import SinglePigList from "pages/singlePigList/singlePigList";
import User from "pages/user/user";

const Paths = {
  Home: "/",
  Dashboard: "/dashboard",

  Login: "/login",
  Register: "/register",
  ForgotPassword: "/forgot-password",

  User: "/user",
  Pigs: "/pigs",
  Catalogue: "/catalogue",
  Accounting: "/accounting",
  Health: "/health",
  Feeding: "/feeding",
  Events: "/events",
  Breeding: "/breeding",

  AddPig: "/pigs/edit",
  NotFound: "/404",

  SinglePig: (id = ":id") => `/pigs/id/${id}`,
  SingleEvent: (id = ":id") => `/events/id/${id}`,
  SingleProduct: (id = ":id") => `/catalogue/id/${id}`,
};

export const ROUTES = () => (
  <Routes>
    <Route path={Paths.Home} element={<Home />} />
    <Route path={Paths.Dashboard} element={<Dashboard />} />
    <Route path={Paths.Login} element={<Auth />} />
    <Route path={Paths.Register} element={<>Register</>} />
    <Route path={Paths.ForgotPassword} element={<>ForgotPassword</>} />
    <Route path={Paths.User} element={<User />} />
    <Route path={Paths.Pigs} element={<Pig />} />
    <Route path={Paths.Catalogue} element={<Catalogue />} />
    <Route path={Paths.Accounting} element={<Accounting />} />
    <Route path={Paths.Health} element={<Health />} />
    <Route path={Paths.Feeding} element={<Feeding />} />
    <Route path={Paths.Events} element={<Events />} />
    <Route path={Paths.AddPig} element={<AddPig />} />
    <Route path={Paths.Breeding} element={<Breeding />} />
    <Route path={Paths.NotFound} element={<>NotFound</>} />
    <Route path={Paths.SingleEvent()} element={<>SingleEvent</>} />
    <Route path={Paths.SinglePig()} element={<SinglePigList />} />
    <Route path={Paths.SingleProduct()} element={<>SingleProduct</>} />
    <Route path={Paths.NotFound} element={<>404</>} />
    <Route path="*" element={<>404</>} />
  </Routes>
);

export default ROUTES;
