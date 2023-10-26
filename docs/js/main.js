import ScreenController from "./controllers/ScreenController.js";

if (!window.localStorage.getItem('lang')) {
    window.localStorage.setItem('lang', 'fr');
}


addEventListener('load', (ev) => {
    const currentScript = Array.from(document.scripts)
        .find(script => script?.src.includes('main.js'));
    console.log(currentScript)
    ScreenController.initScreen(currentScript.screen);
});



