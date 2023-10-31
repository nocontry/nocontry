import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import UserProvider from "./components/UserProvider.jsx";
import "./index.css";
import CategoriesPage from "./pages/CategoriesPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Login from "./pages/Login.jsx";
import Onboarding from "./pages/Onboarding/Onboarding.jsx";
import Preferencias from "./pages/Onboarding/Preferencias.jsx";
import RegisterPage from "./pages/SignUpPage.jsx";
import ConfimacionEvento from "./pages/crearEventos/ConfimacionEvento.jsx";
import DatePicker from "./pages/crearEventos/DatePicker.jsx";
import Entradas from "./pages/crearEventos/Entradas.jsx";
import EventoExito from "./pages/crearEventos/EventoExito.jsx";
import Form from "./pages/crearEventos/Form.jsx";
import TextAreaDescripcion from "./pages/crearEventos/TextAreaDescripcion.jsx";
import CrearEventos from "./pages/crearEventos/index.jsx";
import DetailTicket from "./pages/socialEvent/DetailTicket.jsx";
import PurchaseSommary from "./pages/socialEvent/PurchaseSommary.jsx";
import ReservationFinalized from "./pages/socialEvent/ReservationFinalized.jsx";
import ReserveTicket from "./pages/socialEvent/ReserveTicket.jsx";
import SocialEvent from "./pages/socialEvent/index.jsx";

//estas son las rutas, para navegar a una ruta hay que usar el componente <Link>
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "signup",
    element: <RegisterPage />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "onboarding",
    element: <Onboarding />,
  },
  {
    path: "preferencias",
    element: <Preferencias />,
  },
  {
    path: "categorias",
    element: <CategoriesPage />,
  },
  {
    path: "eventos",
    element: <SocialEvent />,
  },
  {
    path: "reservar-evento",
    element: <ReserveTicket />,
  },
  {
    path: "detalle-reserva",
    element: <DetailTicket />,
  },
  {
    path: "resumen-compra",
    element: <PurchaseSommary />,
  },
  {
    path: "reserva-finalizada",
    element: <ReservationFinalized />,
  },
  { path: "CrearEventos", element: <CrearEventos /> },
  {
    path: "CrearEventos/Form",
    element: <Form />,
  },
  {
    path: "CrearEventos/date",
    element: <DatePicker />,
  },
  {
    path: "CrearEventos/entradas",
    element: <Entradas />,
  },
  { path: "CrearEventos/confirmar", element: <ConfimacionEvento /> },
  { path: "CrearEventos/textarea", element: <TextAreaDescripcion /> },
  { path: "CrearEventos/evento-creado", element: <EventoExito /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <div className="main mx-4 font-nunito">
        <RouterProvider router={router} />
      </div>
    </UserProvider>
  </React.StrictMode>,
);
