import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App"; // Your main App component
import { QueryClient, QueryClientProvider } from "react-query";
import "./index.css";

const queryClient = new QueryClient();

// Get the root element from your HTML
const rootElement = document.getElementById("root");

// Check if the element exists
if (rootElement) {
  // Create a root
  const root = createRoot(rootElement);

  // Render your app
  root.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </React.StrictMode>
  );
}
