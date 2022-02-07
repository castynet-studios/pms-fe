export const Routes = {
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

  SinglePig: (id = "id") => `/pigs/${id}`,
  SingleEvent: (id = "id") => `/events/${id}`,
  SingleProduct: (id = "id") => `/catalogue/${id}`,
};
