import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    body {
        background: ${({theme}) => theme.body};
    }

    .button {
        background-color: ${({theme}) => theme.backgroundcolor}; 
        border: none;
        margin-left: 5px;
        color: ${({theme}) => theme.color};
        padding: 5px 25px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 15px;
    }

    .texto {
        color: ${({theme}) => theme.colortext};
    }
`; 

export default GlobalStyle;
