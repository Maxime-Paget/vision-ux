import { MainController } from "./controllers/MainController.js";

if (!window.localStorage.getItem('lang')) {
    window.localStorage.setItem('lang', 'fr');
}
console.log(window.origin)
switch (window.location.href) {
    case '/': new MainController().init();
}