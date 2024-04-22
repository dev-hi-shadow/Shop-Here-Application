import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
 import { NextUIProvider } from "@nextui-org/system";
import "./index.css";
import { ToastProvider } from "./assets/Hooks/Toastify.jsx";
import Store from "./Services/Store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <NextUIProvider>
         <ToastProvider>
          <Provider store={Store}>
            <App />
          </Provider>
        </ToastProvider>
     </NextUIProvider>
  </Router>
);
