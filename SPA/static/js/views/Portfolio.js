import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Portfolio");
    }

    async getHtml() {
        return `
        <h1>Moje zdjęcia</h1>
        <p>Lorem ipsum</p>
        `
    }
}