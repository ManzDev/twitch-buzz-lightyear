class BuzzArm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        display: block;
        width: 130px;
        height: 190px;
        position: relative;
        z-index: 5;
      }

      :host(.right) {
        transform: scaleX(-1);
      }

      .shoulder {
        width: 20px;
        height: 70px;
        border: 3px solid #000;
        border-radius: 25px;
        background: linear-gradient(82deg, #48474C 50%, #39393C 50%);
        position: absolute;
        right: -5px;
        z-index: 6;
        transform: rotate(-8deg) translate(5px, 0);
      }

      .prearm {
        width: 25px;
        height: 60px;
        border: 3px solid #000;
        border-radius: 25px;
        background: linear-gradient(82deg, #898891 50%, #6F6D75 50%);
        position: absolute;
        right: -5px;

        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 5;
        transform: translate(-7px, 7px) rotate(341deg);
      }

      .prearm::after,
      .elbow::after {
        content: "";
        display: block;
        width: 10px;
        height: 10px;
        background: #111;
        border-radius: 50%;
      }

      .arm {
        width: 70px;
        height: 45px;
        border: 3px solid #000;
        border-radius: 25px 25px 25px 50px;
        background: linear-gradient(82deg, #FEFEFE 80%, #D4D5DD 82%);

        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 4;

        transform: translate(36px, 30px) rotate(331deg);
      }

      .arm::before {
        content: "";
        display: block;
        width: 30px;
        height: 20px;
        background: #FCC806;
        border-radius: 50%;
        position: absolute;
      }

      .arm::after {
        content: "";
        display: block;
        width: 10px;
        height: 10px;
        background: #FB3836;
        border-radius: 50%;
        position: absolute;
        z-index: 1;
        transform: translateX(-5px);
      }

      .elbow {
        width: 32px;
        height: 32px;
        border: 3px solid #000;
        border-radius: 25px;
        background: linear-gradient(82deg, #898891 50%, #6B6A71 50%);
        position: absolute;
        right: -5px;

        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 3;

        transform: translate(17px, 3px);
      }

      .forearm-container {
        transform: rotate(65deg) translate(-11px, -9px);
        position: relative;
        z-index: 5;
      }

      .forearm {
        width: 70px;
        height: 32px;
        border: 3px solid #000;
        border-radius: 50px 10px 10px 0;
        background: linear-gradient(42deg, #88D146 49%, #FEFEFE 50%);

        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 2;

        transform: translate(25px, 10px) rotate(-30deg);
      }

      .wrist {
        content: "";
        display: block;
        width: 5px;
        height: 15px;
        border: 3px solid #000;
        background: #86858D;
        z-index: 1;
        transform: rotate(-30deg) translate(100px, 12px);
      }

      .forearm::before {
        content: "";
        display: block;
        width: 15px;
        height: 10px;
        background: #FCC806;
        border-radius: 50%;
        position: absolute;
        transform: translate(22px, 0);
      }

      .forearm::after {
        content: "";
        display: block;
        width: 6px;
        height: 6px;
        background: #FFE485;
        border-radius: 50%;
        position: absolute;
        z-index: 1;
        transform: translate(22px, 0);
      }

      .hands-container {
        display: flex;
        position: relative;
        width: 64px;
        transform: translate(96px, -23px) rotate(31deg);
        z-index: 10;
      }

      .hands {
        width: 40px;
        height: 35px;
        background: #fff;
        background: linear-gradient(to right, #fff 90%, var(--hood-color) 91%);
        border: 3px solid #000;
        border-radius: 15px 0 0 15px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        z-index: 5;
      }

      .hands::after {
        content: "";
        display: block;
        width: 20px;
        height: 20px;
        border-radius: 50% 0 0 50%;
        background: #86D144;
        transform: translateX(-4px);
      }

      .fingers {
        display: flex;
        flex-direction: column;
        z-index: 5;
      }

      .finger {
        border: 3px solid #000;
        border-top: 0;
        border-left: 0;
        border-radius: 0 10px 10px 0;
        width: 12px;
        height: 6px;
        background: #D7D8E1;
      }

      .finger:first-child {
        border-top: 3px solid #000;
      }

      .thumb {
        border: 3px solid #000;
        border-radius: 0 10px 10px 0;
        width: 18px;
        height: 6px;
        background: linear-gradient(to right, var(--hood-color), #85878A);
        position: absolute;
        top: -5px;
        right: 10px;
        transform: rotate(-10deg);
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${BuzzArm.styles}</style>
    <div class="shoulder"></div>
    <div class="prearm"></div>
    <div class="arm"></div>
    <div class="elbow"></div>
    <div class="forearm-container">
      <div class="forearm"></div>
      <div class="wrist"></div>
    </div>
    <div class="hands-container">
      <div class="hands"></div>
      <div class="fingers">
        <div class="finger"></div>
        <div class="finger"></div>
        <div class="finger"></div>
        <div class="finger"></div>
      </div>
      <div class="thumb"></div>
    </div>
    `;
  }
}

customElements.define("buzz-arm", BuzzArm);
