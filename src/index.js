import React from 'react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import Components from "./Components";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    < Components/>
  </StrictMode>
);



// ReactDOM.render(<Routes/>, document.getElementById("root"));

reportWebVitals();