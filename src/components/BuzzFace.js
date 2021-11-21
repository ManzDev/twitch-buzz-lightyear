import "./BuzzEye.js";

class BuzzFace extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --skin-color: #FBCCB5;
        --skin-shadow-color: #F3BAA0;

        display: flex;
        flex-direction: column;
        align-items: center;
        width: 70px;
        height: 100px;
        position: relative;
        transform: translateY(10px);
      }

      :host::before,
      :host::after {
        content: "";
        display: block;
        background: var(--hood-color);
        width: 10px;
        height: 10px;
        border: 3px solid #000;
        border-radius: 50%;
        position: absolute;
      }

      :host::before {
        left: 4px;
        transform: translateY(21px);
      }

      :host::after {
        right: 4px;
        transform: translateY(21px);
      }

      .head {
        width: 65%;
        height: 30px;
        border-radius: 50% 50% 0 0 / 55% 55% 0 0;
        border: 3px solid black;
        border-bottom: 0;
        background: var(--skin-color);
        background-image:
          radial-gradient(ellipse 40px 60px at -15% 10%, var(--hood-color) 0 12px, transparent 13px),
          radial-gradient(ellipse 40px 60px at 115% 10%, var(--hood-color) 0 14px, transparent 15px),
          radial-gradient(ellipse 80px 20px at 50% 15%, var(--hood-color) 0 18px, transparent 20px);
        z-index: 1;
      }

      .chin {
        width: 75%;
        height: 55px;
        border-radius: 20% 20% 50% 50% / 20% 20% 45% 45%;
        border: 3px solid black;
        clip-path: inset(12% 0% 0% 0%);
        transform: translateY(-8px);
        background: var(--skin-color);
        z-index: 1;
      }

      .face-container {
        position: absolute;
        width: 70%;
        height: 50%;
        z-index: 5;
        transform: translateY(14px);

        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .eyes-container {
        display: flex;
        width: 100%;
        justify-content: space-around;
      }

      .brows-container {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 10px;
      }

      .brow {
        border-top: 4px solid black;
        border-radius: 50% 50% 0 0;
        width: 44%;
        height: 18px;
      }

      .left.brow {
        transform: rotate(-10deg) translate(-4px, 2px);
      }

      .right.brow {
        transform: rotate(15deg) translateY(-2px);
      }

      .nose {
        background: #E9A888;
        width: 10px;
        height: 10px;
        border-radius: 3px 3px 0 0;
      }

      .mouth {
        background: #fff;
        width: 27px;
        height: 25px;
        transform: translateY(8px);
        border-radius: 0 0 5px 5px;
      }

      .spiral {
        width: 2em;
        height: 2em;
        position: relative;
        transform: scale(0.4) translateY(25px);
      }

      .semi {
        position: absolute;
        width: 1.5em;
        height: 1.5em;
        right: 0;
        border: 6px solid #754633;
        border-radius: 50%;
        border-right: 0;
        border-top: 0;
      }

      .end {
        position: absolute;
        width: 0.5em;
        height: 0.5em;
        right: 0;
        top: 0.5em;
        border-top: 6px solid #754633;
        border-left: 6px solid #754633;
        border-radius: 100% 0 0 0;
        transform: rotate(90deg);
      }

      .end-2 {
        width: 0.25em;
        height: 0.5em;
        transform: translate(-0.5em);
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${BuzzFace.styles}</style>
    <div class="head"></div>
    <div class="chin"></div>
    <div class="face-container">
      <div class="brows-container">
        <div class="left brow"></div>
        <div class="right brow"></div>
      </div>
      <div class="eyes-container">
        <buzz-eye class="left"></buzz-eye>
        <buzz-eye class="right"></buzz-eye>
      </div>
      <div class="nose"></div>
      <div class="mouth"></div>
      <div class="spiral">
        <div class="semi"></div>
        <div class="end"></div>
        <div class="end end-2"></div>
      </div>
    </div>
    `;
  }
}

customElements.define("buzz-face", BuzzFace);
