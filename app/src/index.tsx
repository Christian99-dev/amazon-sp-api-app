import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import App from "./App";
import "./index.css";

// Provider
import { TokenProvider } from "./context/tokenContext";
import { CountriesProvider } from "./context/countryContext";
import { AsinsProvider } from "./context/optionsContext";
import { PricingProvider } from "./context/pricingContext";
import { ToastProvider } from "./context/toastContext";
import { SideMenuProvider } from "./context/sidemenuContext";
import { CredentialsProvider } from "./context/credentlalsContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ToastProvider>
      <SideMenuProvider>
        <CredentialsProvider>
          <CountriesProvider>
            <TokenProvider>
              <AsinsProvider>
                <PricingProvider>
                  <App />
                </PricingProvider>
              </AsinsProvider>
            </TokenProvider>
          </CountriesProvider>
        </CredentialsProvider>
      </SideMenuProvider>
    </ToastProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
