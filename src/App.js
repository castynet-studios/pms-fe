import { Routes, Route } from "react-router-dom";
import { ROUTES } from "routes";

export default function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.Home} element={<>home</>} />
        <Route path={ROUTES.Dashboard} element={<>dashboard</>} />
        <Route path={ROUTES.Login} element={<>Login</>} />
        <Route path={ROUTES.Register} element={<>Register</>} />
        <Route path={ROUTES.ForgotPassword} element={<>ForgotPassword</>} />
        <Route path={ROUTES.User} element={<>User</>} />
        <Route path={ROUTES.Pigs} element={<>Pigs</>} />
        <Route path={ROUTES.Catalogue} element={<>Catalogue</>} />
        <Route path={ROUTES.Accounting} element={<>Accounting</>} />
        <Route path={ROUTES.Health} element={<>Health</>} />
        <Route path={ROUTES.Feeding} element={<>Feeding</>} />
        <Route path={ROUTES.Events} element={<>events</>} />
        <Route path={ROUTES.AddPig} element={<>AddPig</>} />
        <Route path={ROUTES.Breeding} element={<>Breeding</>} />
        <Route path={ROUTES.NotFound} element={<>NotFound</>} />
        <Route path={ROUTES.SingleEvent()} element={<>SingleEvent</>} />
        <Route path={ROUTES.SinglePig()} element={<>SinglePig</>} />
        <Route path={ROUTES.SingleProduct()} element={<>SingleProduct</>} />
        <Route path={ROUTES.NotFound} element={<>404</>} />
        <Route path="*" element={<>404</>} />
      </Routes>
    </>
  );
}
