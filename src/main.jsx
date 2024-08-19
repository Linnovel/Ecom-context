import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./pages/App/Index";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
