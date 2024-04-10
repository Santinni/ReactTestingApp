import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { createRoot } from "react-dom/client";

import App from "./App";

// import * as serviceWorker from "./serviceWorker";

const container = document.getElementById("root");
if (container !== null) {
  const root = createRoot(container);
  root.render(<App />);
} else {
  console.error("Failed to find the root element");
}

// TODO: Implement Vite PWA
// f you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
