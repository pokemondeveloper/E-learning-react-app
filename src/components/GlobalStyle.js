import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1700px) {
      font-size: 80%;
    }
    @media (max-width: 1300px) {
      /* font-size: 80%; */
    }
  }

  body {
    background-color: #2A2E35;
    font-family: 'SF Pro Display', sans-serif;                                            
  }

  button {
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    background: transparent;
    padding: 1rem 2rem;
    border: 3px solid #30BEE1;
    color: #fff;
    transition: all 0.25s linear;
    &:hover { 
      background-color: #30BEE1;
      color: #2A2E35;
   }
  }
  h2 {
    font-weight: lighter;
    font-size: 4rem;
   }
   h3 {
    color: white;
   }
   h4 {
    font-weight: bold;
    font-size: 2rem;
   }
   span {
    font-weight: bold;
    color: #30BEE1;
   }
   a {
    font-size: 1.1rem;
   }
   p {
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
   }
`;
export default GlobalStyle;
