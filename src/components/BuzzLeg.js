class BuzzLeg extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --scale: 1;
        --x: -2px;
        --y: -20px;
        --rotate: 6deg;

        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100px;
        height: 250px;
        transform: scaleX(var(--scale)) translate(var(--x), var(--y)) rotate(var(--rotate));
      }

      :host(.right) {
        --scale: -1;
      }

      .preleg {
        border: 3px solid #111;
        width: 50px;
        height: 120px;
        background: #FEFEFE linear-gradient(to right, transparent 80%, #0003 82%);
        border-radius: 30px 100px 20px 20px / 40px 80px 110px 110px;
      }

      .knee {
        border: 3px solid #111;
        width: 25px;
        height: 35px;
        padding: 4px;
        background: #FEFEFE;
        border-radius: 25px;
        transform: translateY(-20px);

        display: flex;
        justify-content: flex-end;
        align-items: center;

        position: relative;
        z-index: 5;
      }

      .knee::after {
        content: "";
        display: block;
        width: 10px;
        height: 10px;
        background: #D7D8E1;
        border-radius: 50%;
      }

      .postleg {
        border: 3px solid #111;
        width: 45px;
        height: 90px;
        background: #FEFEFE linear-gradient(to right, transparent 80%, #0003 82%);
        border-radius: 10px 10px 10px 10px / 110px 110px 10px 10px;
        transform: translateY(-40px);
        z-index: 4;
      }

      .foot-container {
        width: 70px;
        height: 60px;
        position: absolute;
        bottom: 0;
        transform: rotate(-6deg) translateY(-5px);
        z-index: 5;
      }

      .foot-top,
      .foot-right,
      .foot-sole,
      .foot-front {
        border: 3px solid #111;
        position: absolute;
        border-radius: 15px;
        top: 0;
        background: #FEFEFE;
      }

      .foot-top {
        width: 45px;
        height: 30px;
        border-radius: 10px 10px 0 0;
        border-bottom: 0;
        background:
          linear-gradient(to right, transparent 80%, #0003 82%),
          linear-gradient(
            to bottom,
            #fefefe 25%,
            #8AD04C 26% 40%,
            #111 41% 55%,
            #8AD04C 56%
          );
        background-color: #FEFEFE;
      }

      .foot-right {
        width: 10px;
        height: 20px;
        background: #8AD04C;
        right: 0;
        transform: translate(-8px, 10px);
        z-index: 5;
      }

      .foot-sole {
        width: 55px;
        height: 30px;
        background:
          linear-gradient(to right, transparent 88%, #0003 90%),
          linear-gradient(
            to bottom,
            #fff 60%,
            var(--hood-color) 61%
          );
        top: auto;
        border-radius: 15px 15px 10px 0;
        bottom: 0;
        transform: translate(-5px, 0);
      }

      .foot-front {
        width: 50px;
        height: 16px;
        top: auto;
        bottom: 0;
        border-radius: 10px 10px 0 0;
        background:
          linear-gradient(to left, transparent 60%, #0003 62%),
          linear-gradient(
            to bottom,
            #87D147 70%,
            var(--hood-color) 71%
          );
        transform: translate(-12px, 0);
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${BuzzLeg.styles}</style>
    <div class="preleg"></div>
    <div class="knee"></div>
    <div class="postleg"></div>
    <div class="foot-container">
      <div class="foot-top"></div>
      <div class="foot-right"></div>
      <div class="foot-sole"></div>
      <div class="foot-front"></div>
    </div>
    `;
  }
}

customElements.define("buzz-leg", BuzzLeg);
