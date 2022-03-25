import { createGlobalStyle } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
export default createGlobalStyle`
    :root {
        --base-primary-color: #222;
        --base-secondary-color:#dfaa4a;
        --base-tertiary-color: #fd5c0e;
        --base-background-color: #f8f8f8;
        --base-quaternary-color: #FFFF;
        --primary-border-color: #eee;
        --secondary-border-color: #ddd;
        --primary-text-color: #7e7e7e;
        --secondary-text-color: #585858;
        --tertiary-text-color: #292929;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

   /*  @font-face {
        font-family: 'sans-serif';
        src: local('Gidole-Regular'), url(../assets/fonts/Gidole-Regular.otf) format('otf');
    } */

    a {
        cursor: pointer;
        text-decoration:none !important;
    }

    body {
       -webkit-font-smoothing: antialiased;
       -moz-osx-font-smoothing: grayscale;
    }

    body, input, button {
        font-family: 'Roboto Slab',  serif;
        color: var(--primary-text-color);
        font-size: 14px;
    }

    html, body, #root {
        width: 100vw;
        height: 100vh;
    }

`;
