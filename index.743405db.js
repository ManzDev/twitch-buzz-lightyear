const g=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))x(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&x(o)}).observe(document,{childList:!0,subtree:!0});function r(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function x(t){if(t.ep)return;t.ep=!0;const e=r(t);fetch(t.href,e)}};g();class a extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${a.styles}</style>
    <div class="lid"></div>
    <div class="iris">
      <div class="pupil"></div>
    </div>
    `}}customElements.define("buzz-eye",a);class s extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${s.styles}</style>
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
    `}}customElements.define("buzz-face",s);class n extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${n.styles}</style>
    <div class="helmet helmet-back"></div>
    <buzz-face></buzz-face>
    <div class="neck"></div>
    <div class="helmet helmet-front"></div>
    `}}customElements.define("buzz-helmet",n);class d extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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

      .big.button:active {
        background: #900;
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
    `}toggleWings(){const i=new CustomEvent("TOGGLE_WINGS",{composed:!0});this.dispatchEvent(i)}connectedCallback(){this.render(),this.shadowRoot.querySelector(".big.button").addEventListener("click",()=>this.toggleWings())}render(){this.shadowRoot.innerHTML=`
    <style>${d.styles}</style>
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
    `}}customElements.define("buzz-body",d);class l extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${l.styles}</style>
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
    `}}customElements.define("buzz-arm",l);class p extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${p.styles}</style>
    <div class="preleg"></div>
    <div class="knee"></div>
    <div class="postleg"></div>
    <div class="foot-container">
      <div class="foot-top"></div>
      <div class="foot-right"></div>
      <div class="foot-sole"></div>
      <div class="foot-front"></div>
    </div>
    `}}customElements.define("buzz-leg",p);class c extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}toggle(){this.classList.toggle("close")}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${c.styles}</style>
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
    `}}customElements.define("buzz-wing",c);class h extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}toggleWings(){this.shadowRoot.querySelectorAll("buzz-wing").forEach(r=>r.toggle())}connectedCallback(){this.render(),this.addEventListener("TOGGLE_WINGS",()=>this.toggleWings())}render(){this.shadowRoot.innerHTML=`
    <style>${h.styles}</style>
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
    </div>`}}customElements.define("buzz-lightyear",h);
