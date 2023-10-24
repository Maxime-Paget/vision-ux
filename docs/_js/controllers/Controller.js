import { Renderer } from "../views/Renderer.js";

export class Controller {
    constructor () {
        if (!window.localStorage.getItem('lang')) {
            window.localStorage.setItem('lang', 'fr');
        }

        Renderer.instance.retrieveTemplates();
        Renderer.instance.renderPartial('beforebegin', 'header', document.querySelector('body')).then(
            this.init()
        ).catch(console.error);
    }

    init () {
        throw new Error('must declare init function');
    }
}