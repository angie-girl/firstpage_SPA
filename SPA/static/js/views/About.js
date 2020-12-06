import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("O mnie");
    }

    async getHtml() {
        return `
        <div class="about__me">
        <div class="about__wrap">
        <h1>About me</h1>
        <p>GET TO KNOW ME A LITTLE BETTER</p>
        </div>
        </div>
        <div class="block__text">
        <div class="text__about">
        <h2>MEET YOUR PHOTOGRAPHER</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, atque. Ratione accusamus ipsum incidunt facere, labore aspernatur inventore enim nostrum modi esse, voluptate magni, optio sapiente voluptatibus beatae odio saepe! Minima cumque sapiente quaerat. Rem non omnis quisquam magni delectus ipsam possimus praesentium, at ut aliquam! Quis expedita rerum nobis blanditiis. Impedit?</p>
        </div>
        </div>
        <div class="block__button">
        <div class="button__touch">
        <a href="/kontakt" class="nav__link" data-link>GET IN TOUCH</a>
        </div>
        </div>
        `
    }
}