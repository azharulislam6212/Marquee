
class BluMarquee extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.init();
  }
  calculationPaddingSection() {
    (this.heightSection = this.offsetHeight),
      (this.heightSection =
        this.heightSection < 18
          ? 18
          : 96 < this.heightSection
          ? 96
          : this.heightSection),
      this.closest(".js-running-content").style.setProperty(
        "--spacing-padding-block",
        this.heightSection + "px"
      );
  }
  init() {
    (this.distance = this.querySelector(".js-marquee-item").offsetWidth),
      (this.speed = this.dataset.speed),
      this.style.setProperty(
        "--marquee-duration",
        this.distance / this.speed + "s"
      );
  }
}
customElements.define("marquee-content", BluMarquee);
