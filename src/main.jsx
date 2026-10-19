// Entry point: mounts the React app into <div id="root"> in index.html.
// BrowserRouter lets us have real urls like /projects/brain-tumor-classification.
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// Keep the site at one fixed size: block ctrl/cmd + scroll, ctrl/cmd + plus/minus/0,
// and pinch-zoom on iPhones (Safari ignores user-scalable=no in index.html).
window.addEventListener("wheel", (e) => e.ctrlKey && e.preventDefault(), { passive: false });
window.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && ["+", "=", "-", "_", "0"].includes(e.key)) e.preventDefault();
});
document.addEventListener("gesturestart", (e) => e.preventDefault());

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
