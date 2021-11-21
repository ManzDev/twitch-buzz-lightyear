import "./BuzzHelmet.js";
import "./BuzzBody.js";
import "./BuzzArm.js";
import "./BuzzLeg.js";
import "./BuzzWing.js";

class BuzzLightyear extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --hood-color: #833F9F;

        display: flex;
        justify-content: center;
        width: 500px;
        height: 500px;
      }

      .body-container {
        display: flex;
      }

      buzz-body {
        z-index: 10;
      }

      .legs-container {
        display: flex;
        justify-content: center;
        transform: translateY(-60px);
        position: relative;
        z-index: 10;
      }
    `;
  }

  toggleWings() {
    const wings = this.shadowRoot.querySelectorAll("buzz-wing");
    wings.forEach((wing) => wing.toggle());
  }

  connectedCallback() {
    this.render();
    this.addEventListener("TOGGLE_WINGS", () => this.toggleWings());
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${BuzzLightyear.styles}</style>
    <div>
      <buzz-helmet></buzz-helmet>
      <div class="body-container">
        <buzz-wing class="left"></buzz-wing>
        <buzz-arm class="left"></buzz-arm>
        <buzz-body></buzz-body>
        <buzz-arm class="right"></buzz-arm>
        <buzz-wing class="right"></buzz-wing>
      </div>
      <div class="legs-container">
        <buzz-leg class="left"></buzz-leg>
        <buzz-leg class="right"></buzz-leg>
      </div>
    </div>`;
  }
}

customElements.define("buzz-lightyear", BuzzLightyear);
