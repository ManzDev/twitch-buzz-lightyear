class BuzzBody extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .body {
        background: #FEFEFE;
        width: 175px;
        height: 125px;
        border: 3px solid #000;
        border-radius: 10% 10% 45% 45% / 10% 10% 40% 40%;
        overflow: hidden;
        position: relative;

        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .band {
        background: var(--hood-color);
        width: 100%;
        height: 16px;
        border-bottom: 4px solid #000;
        position: absolute;
        bottom: 0;
      }

      .left.band {
        transform-origin: 0% 50%;
        transform: rotate(-45deg) translateY(-10px);
      }

      .right.band {
        transform-origin: 100% 50%;
        transform: rotate(45deg) translateY(-10px);
      }

      .waist {
        background: #aaa;
        width: 75%;
        height: 50px;
        border-radius: 50%;
        position: absolute;
        bottom: 0;
        transform: translateY(15px);
      }

      .chest-armor {
        width: 204px;
        height: 60px;
        position: absolute;
        top: 0;
        display: flex;
        justify-content: center;
        filter:
          drop-shadow(2px 2px 0 #6E9C50)
          drop-shadow(-2px 2px 0 #6E9C50)
          drop-shadow(2px 0px 0 #6E9C50)
          drop-shadow(-2px 0 0 #6E9C50);
      }

      .chest-armor .left-part,
      .chest-armor .right-part {
        width: 50%;
        height: 100%;
        background: #88D146;
        clip-path: polygon(
          10% 15%, 22% 0,
          101% 0, 101% 70%,
          80% 94%, 30% 80%
        );

        display: flex;
        justify-content: center;
        align-items: center;
      }

      .chest-armor .right-part {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        transform: scaleX(-1);
      }

      .central-part {
        background: #FFFEFE;
        width: 45px;
        height: 25px;
        border-radius: 0 0 50% 50%;
        border: 3px solid #000;
        position: absolute;
        z-index: 5;

        display: flex;
        justify-content: center;
        align-items: center;
      }

      .central-part::after {
        content: "";
        background: linear-gradient(to right, #91BAFF 70%, #5F9AFF 72%);
        width: 80%;
        height: 70%;
        border-radius: 0 0 50% 50%;
        display: block;
      }

      .left-part .button {
        width: 8px;
        height: 22px;
        margin: 0 3px;
        border-radius: 20px;
        transform: translateY(var(--y, 0));
        box-shadow: 0 0 0 2px #73B23B;
      }

      .primary {
        --y: -6px;
        background: #287AF1;
      }

      .secondary {
        --y: -3px;
        background: #28891F;
      }

      .terciary {
        background: #F93935
      }

      .right-part .big.button {
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: #DB2F27;
        box-shadow:
          0 0 4px #0008 inset,
          0 0 0 2px #73B23B;
      }

      .sticker {
        background: #FCCA07;
        width: 30px;
        height: 10px;
      }

      .button-container {
        display: flex;
        justify-content: flex-end;
        background: #73B23B;
        width: 30px;
        height: 18px;
        border-radius: 50%;
        transform: rotate(25deg) translateY(-10px);
      }

      .waist-container {
        width: 100%;
        height: 40px;
        position: relative;
        display: flex;
        justify-content: center;
        transform: translateY(-12px);
        z-index: 5;
      }

      .waist-container .waist {
        width: 55%;
        height: 8px;
        background: linear-gradient(to right, #49494D 75%, #39383D 75%);
        border: 3px solid #111;
        border-radius: 15px;
        position: absolute;
        top: 0;
      }

      .waist-container .waist:nth-child(1) {
        transform: translateY(-12px);
      }

      .waist-container .waist:nth-child(2) {
        transform: translateY(0px);
      }

      .waist-container .waist:nth-child(3) {
        transform: translateY(12px);
      }

      .buzz-bottom {
        width: 120px;
        height: 60px;
        border: 3px solid #111;
        border-radius: 20px 20px 50px 50px;
        background: #FEFEFE;
        transform: translateY(-35px);

        display: flex;
        justify-content: center;
        overflow: hidden;
      }

      .triangle {
        background: #86D146;
        width: 100%;
        height: 30px;
        clip-path: polygon(0 0, 50% 100%, 100% 0);
      }
    `;
  }

  toggleWings() {
    const event = new CustomEvent("TOGGLE_WINGS", { composed: true });
    this.dispatchEvent(event);
  }

  connectedCallback() {
    this.render();
    const button = this.shadowRoot.querySelector(".big.button");
    button.addEventListener("click", () => this.toggleWings());
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${BuzzBody.styles}</style>
    <div class="body">
      <div class="left band"></div>
      <div class="right band"></div>
      <div class="waist"></div>
    </div>
    <div class="chest-armor">
      <div class="left-part">
        <div class="primary button"></div>
        <div class="secondary button"></div>
        <div class="terciary button"></div>
      </div>
      <div class="right-part">
        <div class="sticker"></div>
        <div class="button-container">
          <div class="big button"></div>
        </div>
      </div>
      <div class="central-part"></div>
    </div>
    <div class="waist-container">
      <div class="waist"></div>
      <div class="waist"></div>
      <div class="waist"></div>
    </div>
    <div class="buzz-bottom">
      <div class="triangle"></div>
    </div>
    `;
  }
}

customElements.define("buzz-body", BuzzBody);
