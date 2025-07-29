// src/router.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import Form from "./components/Form";
import Failure from "./components/Failure";
import  Success from "./components/Success";
import About from "./components/About";
import Service from "./components/Service";
import Contact from "./components/Contact";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
// import the error page

const ProtectedForm = () => (
  <>
    <SignedIn>
      <Form />
    </SignedIn>
    <SignedOut>
      <RedirectToSignIn redirectUrl="/form" />
    </SignedOut>
  </>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },       // Home
      { path: "about", element: <About /> },    // About
      // { path: "services", element: <Service /> }, // Internship
      { path: "contact", element: <Contact /> }, // Contact
      {
        path: "form",
        element: <ProtectedForm />,
        errorElement: <ErrorPage />,
      },
      { path: "payment-failed", element: <Failure /> },
      { path: "payment-success", element: <Success /> },
    ],
  },
]);

