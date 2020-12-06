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
        </div>
        <div class="home__wrap">
        <p>Moments that <i>move<i>.</p>
        </div>
        <div class="home__mission">
        <h1>Our mission</h1>
        <p>We create moments that move.</p>
        </div>
        `
    }
}