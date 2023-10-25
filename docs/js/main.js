import ScreenController from "./controllers/ScreenController.js";

if (!window.localStorage.getItem('lang')) {
    window.localStorage.setItem('lang', 'fr');
}

const currentScript = Array.from(document.scripts)
    .find(script => script?.src.includes('main.js'));

ScreenController.initScreen(currentScript.screen);


