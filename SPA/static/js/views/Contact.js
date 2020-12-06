import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Kontakt");
    }

    async getHtml() {
        return `
        <div class="wrap__contact">
        <div class="backgroud"></div>
        <div class="contact__img"></div>
        <div class="form__contact">
        <form class="form">
            <h2>Contact</h2>
            <input type="text" placeholder="Enter your Name">
            <input type="text" placeholder="Enter a valid email address">
            <textarea placeholder="Enter your message"></textarea>
            <button>Submit</button>
        </form>
        </div>
        </div>
        <div class="contact">
        <p>Photo Studio Sp. z o.o., Warszawska 1, 00-000 Warszawa, email:name@companyname.pl, tel: 346246789</p>
        </div>
        `
    }
}