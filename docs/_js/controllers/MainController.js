import { Renderer } from "../views/Renderer.js";
import { Controller } from "./Controller.js";

export class MainController extends Controller{
    #events = [];

    init () {
        Renderer.instance.renderTemplate()
    }
}

new MainController().init();