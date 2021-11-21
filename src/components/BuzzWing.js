class BuzzWing extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        display: flex;
        align-items: flex-end;
        width: 175px;
        height: 110px;
        position: relative;
      }

      :host(.left) {
        transform: translateX(150px);
      }

      :host(.right) {
        transform: translateX(-150px) scaleX(-1);
      }

      .wing {
        --x: 0px;   /* hasta 80px */

        width: 90px;
        height: 100%;
        background: #79BC45;
        clip-path: polygon(0 10%, 100% 0%, 100% 100%, 15% 100%);
        position: absolute;
        bottom: 0;
        right: 0;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transform: translateX(var(--x));
        transition: transform 0.75s ease-in-out 0s;
      }

      :host(.close) .wing {
        --x: 80px;
        transition-delay: 0.75s;
      }

      .end-container {
        --x: 0px;   /* hasta 100px */

        display: flex;
        height: 100%;
        align-items: flex-end;
        transform: translateX(var(--x));
        transition: transform 0.75s ease-in-out 0.75s;
      }

      :host(.close) .end-container {
        --x: 200px;
        transition-delay: 0s;
      }

      .wing-end {
        width: 80px;
        height: 80%;
        background: #59aC25;
        transform: translate(20px, -5px);
        clip-path: polygon(0 10%, 100% 0%, 100% 100%, 15% 100%);
        position: absolute;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .light-container {
        background: #79bc45;
        width: 20px;
        border-radius: 20px;
        height: 80%;
        position: absolute;
        z-index: 5;
        transform: translateX(10px) rotate(-10deg);
      }

      .light {
        width: 80%;
        height: 30px;
        background: #63A22D;
        border-radius: 25px;
        background: #881010;
        box-shadow: 0 0 4px 5px #f00c;
        animation: blink 1s infinite alternate;
      }

      .wing-top {
        background: repeating-linear-gradient(-60deg, #D63636 0 15%, #FFFFFF 16% 33%);
        width: 100%;
        height: 30px;
      }

      .wing-bottom {
        background: #814B9C;
        width: 100%;
        height: 66%;
      }

      .wing-end .wing-bottom {
        height: 60%;
      }

      @keyframes blink {
        0% {
          background: #800;
          box-shadow: 0 0 0 5px #f000;
        }
        100% {
          background: #a00;
          box-shadow: 0 0 6px 5px #f00c;
        }
      }
    `;
  }

  toggle() {
    this.classList.toggle("close");
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${BuzzWing.styles}</style>
    <div class="end-container">
      <div class="light-container">
        <div class="light"></div>
      </div>
      <div class="wing-end">
        <div class="wing-top"></div>
        <div class="wing-bottom"></div>
      </div>
    </div>
    <div class="wing">
      <div class="wing-top"></div>
      <div class="wing-bottom"></div>
    </div>
    `;
  }
}

customElements.define("buzz-wing", BuzzWing);
