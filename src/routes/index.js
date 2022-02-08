export const ROUTES = {
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
