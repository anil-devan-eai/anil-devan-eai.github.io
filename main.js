import './scss/login.scss';
import { genCSSVars } from '@eai/kosmos-lib-theme-utils';
import foundryDarkTheme from './theme/darkTheme.json';
import foundryLightTheme from './theme/lightTheme.json';

// Generate theme variables
const darkTheme = `@media (prefers-color-scheme: dark) {${genCSSVars(
    foundryDarkTheme,
)}}`;
const lightTheme = `@media (prefers-color-scheme: light) {${genCSSVars(
    foundryLightTheme,
)}}`;


function injectThemeVariables(themeCss) {
    const style = document.createElement("style")
    style.textContent = themeCss
    document.head.appendChild(style);
}

injectThemeVariables(darkTheme)
injectThemeVariables(lightTheme);

// function fixUI() {
//     const loginButton = document.querySelector('.buttons button');
//     loginButton.classList.add('kosmos-button')
//     loginButton.classList.add('kosmos-button--primary')
// }
//
// window.addEventListener("DOMContentLoaded", fixUI);
//
// fixUI();