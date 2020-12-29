import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Home");
    }

    async getHtml() {
        return `
        <div class="video-container">
        <video [muted]="true" autoplay playsinline loop id="background-video">
            <source src="static/assets/Flower.mp4" type="video/mp4" />
        </video>
        <div class="home__wrap">
        <p>Moments that <i>move</i>.</p>
        </div>
        </div>
        <div class="home__mission">
        <span>Our mission</span>
        <p>We create moments that <i>move</i>.</p>
        <p>Moments that <i>move emotions,</i>
        to create joy, to inspire,
        to excite. Moments that
        <i>move individuals to act,</i>
        to purchase, to experience,
        to advocate. Moments that
        <i>move brands forward,</i> cohesively
        elevating them to be more
        distinguished, more desirable
        & relevant.
        </p>
        </div>
        `
    }
}