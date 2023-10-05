import { css } from 'styled-components';

export const reset = css`
  /* BASICS */

  /* Box sizing, reset margins */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* set scroll behavior to smooth */
  html:focus-within {
    scroll-behavior: smooth;
  }

  html {
    /* Allow percentage-based heights in the application */
    block-size: 100%;
    /* Making sure text size is only controlled by font-size */
    -webkit-text-size-adjust: none;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    @supports (height: 100dvh) {
      min-height: 100dvh;
    }

    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;

    /* Allow percentage-based heights in the application */
    min-block-size: 100%;
  }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* MEDIA AND ASSETS */

  /* SVG's without a fill attribute */
  :where(svg):where(:not([fill])) {
    /* Remove fill and set stroke colour to the inherited font colour */
    stroke: currentColor;
    fill: none;
    /* Rounded stroke */
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  /* Improve media defaults */
  :where(img, svg, video, canvas, audio, iframe, embed, object) {
    display: block;
  }
  :where(img, svg, video) {
    block-size: auto;
    max-inline-size: 100%;
  }

  /* ELEMENTS */

  /* Remove border and set sensible defaults for backgrounds, on all elements except fieldset progress and meter */
  *:where(:not(fieldset, progress, meter)) {
    border-width: 0;
    border-style: solid;
    background-origin: border-box;
    background-repeat: no-repeat;
  }

  /* remove list styles */
  :where(ul, ol) {
    list-style: none;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* remove default button styles */
  :where(button) {
    outline: transparent;
  }

  /* A elements that don't have a class get default styles */
  :where(a:not([class])) {
    text-decoration-skip-ink: auto;
  }

  /* Remove search field's clear button */
  :where(input)[type='search']::-webkit-search-decoration,
  :where(input)[type='search']::-webkit-search-cancel-button,
  :where(input)[type='search']::-webkit-search-results-button,
  :where(input)[type='search']::-webkit-search-results-decoration {
    display: none;
  }

  /* Make sure users can't select button text */
  :where(button, button[type], input[type='button'], input[type='submit'], input[type='reset']),
  :where(input[type='file'])::-webkit-file-upload-button,
  :where(input[type='file'])::file-selector-button {
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    user-select: none;
    text-align: center;
  }

  /* Disabled cursor for disabled buttons */
  :where(
      button,
      button[type],
      input[type='button'],
      input[type='submit'],
      input[type='reset']
    )[disabled] {
    cursor: not-allowed;
  }

  /* Animate focus outline */
  @media (prefers-reduced-motion: no-preference) {
    :focus-visible {
      transition: outline-offset 145ms cubic-bezier(0.25, 0, 0.4, 1);
    }
    :where(:not(:active)):focus-visible {
      transition-duration: 0.25s;
    }
  }
  :where(:not(:active)):focus-visible {
    outline-offset: 5px;
  }

  /*
    mostly based on the awesome css resets by:
  
    Elly Loel
    https://elly.to/CSS-Reset
    Andy Bell
    https://andy-bell.co.uk/a-modern-css-reset
  
    some small tweaks of my own
  */
`;

export const color = css`
  :root {
    --color-primary: hsl(238 70% 57%);
    --color-primary-variant: hsl(238 70% 37%);

    --color-secondary: hsl(358 70% 57%);
    --color-secondary-variant: hsl(358 70% 77%);

    --color-background: #0d0628;

    --color-surface-variant: #2a0944;
    --color-surface: #202030;

    --color-foreground: #fdfdff;

    --color-contrast: #ffbd00;
    --color-contrast-variant: #ec9ded;
  }
`;

export const font = css`
  @import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,700;0,900;1,400&family=Fira+Sans:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap');

  :root {
    --font-size-xs: 0.5rem;
    --font-size-s: 0.75rem;
    --font-size-base: 1rem;
    --font-size-m: 1.25rem;
    --font-size-l: 1.5rem;
    --font-size-xl: 2rem;
    --font-size-xxl: 3rem;
    --font-size-xxxl: 4rem;

    --font-weight-regular: 400;
    --font-weight-bold: 700;
    --font-weight-black: 900;

    --font-primary: 'Barlow', sans-serif;
    --font-secondary: 'Fira Sans', sans-serif;
  }
`;

export const shadow = css`
  :root {
    --box-shadow-light: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    --box-shadow-medium: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    --box-shadow-heavy: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
      rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
      rgba(0, 0, 0, 0.09) 0px -3px 5px;
    --box-shadow-inset-light: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
    --box-shadow-inset: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;
