export class Renderer {
    static instance = new Renderer();
    dictionnary = 'fr';
    #templates = {};

    renderTemplate () {

    }

    retrieveTemplates() {
        const templates = Array.from(document.querySelectorAll('template'));
        for (const template of templates) {
            const { name } = template.dataset;

            if (!name) {
                throw new Error('Each template must declare a name dataset property')
            }
        }
    }

    /**
     * @param {*} partialName
     * @param {Element} destination
     * @param {InsertPosition} position
     * @param {*} dataBind
     */
    async renderPartial (position, partialName, destination, dataBind) {
        const response = await fetch(`partials/${partialName}.html`);
        const html = await response.text();
        destination.insertAdjacentHTML(position, this.bindData(html, dataBind))
    }

    /**
     * 
     * @param {String} html 
     */
    bindData (html, dataValue) {
        const regex = /{{(.*?)}}/gi;
        let bindedHtml = html; 
        const toBindData = html.matchAll(regex);
        for (const data of toBindData) {
            const prop = data[1];
            bindedHtml = bindedHtml.replaceAll(`{{${prop}}}`, dataValue?.[prop]);
        }
        return bindedHtml;
    }
}