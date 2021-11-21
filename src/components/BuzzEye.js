class BuzzEye extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        display: block;
        border-radius: 50%;
        background: #fff;
        width: 18px;
        height: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        overflow: hidden;
      }

      .lid {
        background: #EBA885;
        width: 120%;
        height: 100%;
        position: absolute;
        transform: translateY(-10px) rotate(var(--rotate));
      }

      :host(.left) .lid { --rotate: -8deg; }
      :host(.right) .lid { --rotate: 8deg; }

      .iris {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #1B577E;

        display: flex;
        justify-content: center;
        align-items: center;
      }

      .pupil {
        width: 3px;
        height: 3px;
        background: #111;
        border-radius: 50%;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${BuzzEye.styles}</style>
    <div class="lid"></div>
    <div class="iris">
      <div class="pupil"></div>
    </div>
    `;
  }
}

customElements.define("buzz-eye", BuzzEye);
