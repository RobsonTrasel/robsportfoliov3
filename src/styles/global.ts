import { lighten } from 'polished';
import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  background: '#11172B',
  backgroundLight: '#1B2138',
  primary: '#0EE7B7',
  secondary: '#7AC7E3',
  gradient: 'linear-gradient(225deg, #313860 0%, #11172B 100%);',
  text: '#848DA0',
  textHighlight: '#444B5B',
  textLight: '#C4C4C4',
  border: '#313958',
  inputBackground: '#1E253E',
  error: '#d45d5d'
}

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;

    ::-webkit-scrollbar {
      width: 8px;
      height: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.primary};
      border-radius: 10px;
    }
    ::-webkit-scrollbar-track{
      background: ${({ theme }) => lighten(0.4, theme.primary)};
    }
  }

  body {
    background: ${props => props.theme.background};
    font: 400 1rem 'Montserrat', sans-serif;
  }

  img {
    width: 100%;
    max-width: 100%;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  .container {
    width: 100%;
    margin: 0 auto;
    max-width: 85rem;
    padding: 0 1rem;
    @media(max-width:1450px) {
      max-width: 70rem;
    }
    @media(max-width:1000px) {
      max-width: 50rem;
    }
    @media(max-width:700px) {
      padding: 0 2rem;
    }
  }

`;