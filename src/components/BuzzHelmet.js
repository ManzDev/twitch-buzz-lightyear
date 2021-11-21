import "./BuzzFace.js";

class BuzzHelmet extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 150px;
        height: 100px;
        margin: auto;
        position: relative;
      }

      .helmet {
        width: 100%;
        height: 100%;
        border: 3px solid #000;
        border-radius: 50% 50% 0 0 / 65% 65% 0 0;
        background: #f663;
        position: absolute;
        top: 0;
      }

      .helmet-back {
        background:
          linear-gradient(to right, #0002, transparent, #0002),
          linear-gradient(to bottom, transparent 80%, #777 80% 87%, #555 88% 100%);
      }

      .helmet-front {
        background:
          linear-gradient(to bottom, #0004 30%, transparent 31%),
          linear-gradient(to bottom, transparent, #0003);
        height: 100%;
        position: absolute;
        z-index: 10;
      }

      buzz-face {
        z-index: 1;
      }

      .neck {
        width: 38px;
        height: 20px;
        position: absolute;
        align-self: flex-end;
        border: 3px solid #000;
        background: var(--hood-color);
        transform: translateY(6px);
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${BuzzHelmet.styles}</style>
    <div class="helmet helmet-back"></div>
    <buzz-face></buzz-face>
    <div class="neck"></div>
    <div class="helmet helmet-front"></div>
    `;
  }
}

customElements.define("buzz-helmet", BuzzHelmet);
