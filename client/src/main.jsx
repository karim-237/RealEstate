import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <Auth0Provider
     domain="dev-ktaomqpf0advp551.us.auth0.com"
     clientId="PfZrsA6NdCG5nJ1HQNK4yjZFoGCyyFz4"
     authorizationParams={{
      redirect_uri: "https://real-estate-eight-orcin.vercel.app"
     }}
     audience="https://real-estate-server-red.vercel.app"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
