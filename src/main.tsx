import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import ReactGA from "react-ga4";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "./index.css";

const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
if (gaId) {
  ReactGA.initialize(gaId);
}

createRoot(document.getElementById("root")!).render(<App />);
