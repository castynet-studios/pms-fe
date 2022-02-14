import { Routes, Route } from "react-router-dom";

import Auth from "pages/auth/auth";

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
    <Route path={Paths.Home} element={<>home</>} />
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
    <Route path={Paths.Events} element={<>events</>} />
    <Route path={Paths.AddPig} element={<>AddPig</>} />
    <Route path={Paths.Breeding} element={<>Breeding</>} />
    <Route path={Paths.NotFound} element={<>NotFound</>} />
    <Route path={Paths.SingleEvent()} element={<>SingleEvent</>} />
    <Route path={Paths.SinglePig()} element={<>SinglePig</>} />
    <Route path={Paths.SingleProduct()} element={<>SingleProduct</>} />
    <Route path={Paths.NotFound} element={<>404</>} />
    <Route path="*" element={<>404</>} />
  </Routes>
);
export default ROUTES;