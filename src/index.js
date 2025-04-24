import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { SnackbarProvider } from "notistack";

// Target the root element
const container = document.getElementById("root");
const root = createRoot(container); // React 18+ compatible

// Render your app
root.render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={3}>
      <App />
    </SnackbarProvider>
  </React.StrictMode>
);

// Optional: service worker
serviceWorker.unregister();
