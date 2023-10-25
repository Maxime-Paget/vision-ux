import { Renderer } from "../views/Renderer.js";
export default class ScreenController {
    static #initializing = false;
    constructor () {
        if (!ScreenController.#initializing) {
            throw new Error ('Private constructor use initScreen function')
        }
        if (!window.localStorage.getItem('lang')) {
            window.localStorage.setItem('lang', 'fr');
        }

        Renderer.instance.retrieveTemplates();
        Renderer.instance.renderPartial('beforebegin', 'header', document.querySelector('body')).then(
            this.initEvent()
        ).catch(console.error);
        ScreenController.#initializing = false;
    }

    static async initScreen (screenName) {
        console.log(screenName);
        this.#initializing = true;
        new ScreenController();
    }

    initEvent() {

    }
}