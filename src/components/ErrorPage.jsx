// src/components/ErrorPage.jsx
import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error("Router Error:", error);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>😵 Oops!</h1>
      <p>Something went wrong while loading the page.</p>
      {error?.status && <p>Status: {error.status}</p>}
      {error?.statusText && <p>{error.statusText}</p>}
      <a href="/" style={{ marginTop: "1rem", display: "inline-block" }}>
        Go back home
      </a>
    </div>
  );
};

export default ErrorPage;
