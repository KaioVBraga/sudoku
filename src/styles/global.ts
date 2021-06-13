import { memo } from 'react';
import { createGlobalStyle } from 'styled-components';

export default memo(createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
  }

  html, body, #root {
    height: 100vh;
    width: 100%;
    position: relative;
  }
`);
