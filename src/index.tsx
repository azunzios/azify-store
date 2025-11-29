import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import { Analytics } from "@vercel/analytics/react"
import App from './Blog';

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <App />
      <Analytics />
    </StyledEngineProvider>
  </React.StrictMode>
);