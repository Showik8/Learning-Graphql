import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import client from "./appoloClient.ts";
import { ApolloProvider } from "../node_modules/@apollo/client/react/index.js";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>
);
