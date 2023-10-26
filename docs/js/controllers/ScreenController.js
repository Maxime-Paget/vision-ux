import { Renderer } from "../views/Renderer.js";
export default class ScreenController {

    static #initializing = false;
    platform = '';

    constructor () {
        if (!ScreenController.#initializing) {
            throw new Error ('Private constructor use initScreen function')
        }

        if (!window.localStorage.getItem('lang')) {
            window.localStorage.setItem('lang', 'fr');
        }

        Renderer.instance.retrieveTemplates(); 
        this.platform = window.navigator.userAgentData.mobile || window.innerWidth <= 720 ? 'mobile' : 'largeScreen';
        Renderer.instance.renderPartial(
            'afterbegin',
            'header',
            document.querySelector('body'),
            { platform: this.platform }
        ).then(() => {
            this.initEvent()
        }).catch(console.error);

        ScreenController.#initializing = false;
    }

    /**
     * 
     * @param {Event} ev 
     */
    menuBurgerHandler(ev) {
        const list = ev.target.parentNode.querySelector('.header__menu-list');
        list.classList.toggle('deployed');
    }

    static async initScreen (screenName) {
        this.#initializing = true;
        new ScreenController();
    }

    initEvent() {
        console.log('initEvent')
        window.addEventListener('resize', () => {
            const potentialPlatform = window.innerWidth <= 720 ? 'mobile' : 'largeScreen';
            if (this.platform !== potentialPlatform) {
                this.platform = potentialPlatform;
                location.reload();
            }
            if(this.platform === 'mobile') {
                document.querySelector('.header__menu-burger').addEventListener('click', this.menuBurgerHandler);
            }
        });

        if(this.platform === 'mobile') {
            document.querySelector('.header__menu-burger').addEventListener('click', this.menuBurgerHandler);          
        }
    }
}