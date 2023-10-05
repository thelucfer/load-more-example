import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import { App } from './App.tsx';
import { color, font, reset, shadow } from './styles.ts';

const styled = { createGlobalStyle };
const GlobalStyle = styled.createGlobalStyle`
  ${reset};
  ${font};
  ${color};
  ${shadow};

  body {
    font-family: var(--font-primary);
    font-size: var(--font-size-base);

    color: var(--color-foreground);
    background: var(--color-background);

    min-height: 100vh;
    @supports (height: 100dvh) {
      min-height: 100dvh;
    }

    & > #root {
      min-height: 100vh;
      @supports (height: 100dvh) {
        min-height: 100dvh;
      }

      display: grid;
      grid-template-rows: auto 1fr auto;
      grid-template-areas: 'header' 'main' 'footer';
    }
  }

  /* scrollbar */
  ::-webkit-scrollbar-track {
    background-color: var(--color-background);
  }

  ::-webkit-scrollbar {
    width: 0.5rem;
    background-color: var(--color-background);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--color-foreground);
  }

  ::-webkit-scrollbar-button {
    display: none;
  }
`;

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
);
