export class Renderer {
    static instance = new Renderer();
    dictionnary = 'fr';
    #templates = {};

    renderTemplate() {

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
     */
    async renderPartial (position, partialName, destination) {
        await fetch(`partials/${partialName}.html`)
            .then(async (response) => {
                document.body.insertAdjacentHTML('afterbegin',await response.text())
            })
            .catch(console.error)
    }
}