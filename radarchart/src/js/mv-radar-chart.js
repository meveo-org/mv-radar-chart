import { LitElement, html, css } from "https://cdn.jsdelivr.net/gh/meveo-org/mv-dependencies@master/lit-element.js";
import "../lib/chart.min.js";
import "../lib/chartjs-plugin-datalabels.min.js";
import { RADAR_CONFIG } from "./data.js";

export class MvChart extends LitElement {
  static get properties() {
    return {
      type: {
        type: String,
        attribute: true
      },
      data: {
        type: Object,
        attribute: false,
        reflect: true
      },
      options: {
        type: Object,
        attribute: false,
        reflect: true
      },
      plugins: {
        type: Object,
        attribute: false,
        reflect: true
      },

      //  valid theme values are: "light", "dark"    default: "light"
      theme: {
        type: String,
        attribute: true
      }
    };
  }

  static get styles() {
    return css`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
        --chart-margin: var(--mv-chart-margin, auto);
        --chart-height: var(--mv-chart-height, 300px);
        --chart-width: var(--mv-chart-width, 400px);
        --light-background: var(--mv-chart-background, #ffffff);
        --dark-background: var(--mv-chart-dark-background, #373e48);
        --light-color: var(--mv-chart-light-color, #000000);
        --dark-color: var(--mv-chart-dark-color, #ffffff);
      }

      .mv-chart {
        margin: var(--chart-margin);
        height: var(--chart-height);
        width: var(--chart-width);
        position: relative;
      }

      .light {
        background-color: var(--light-background);
        color: var(--light-color);
      }

      .dark {
        background-color: var(--dark-background);
        color: var(--dark-color);
      }

      /* Chart.js custom styles 
       *
       * DOM element rendering detection
       * https://davidwalsh.name/detect-node-insertion
       */
      @keyframes chartjs-render-animation {
        from {
          opacity: 0.99;
        }
        to {
          opacity: 1;
        }
      }

      .chartjs-render-monitor {
        animation: chartjs-render-animation 0.001s;
      }

      /*
       * DOM element resizing detection
       * https://github.com/marcj/css-element-queries
       */
      .chartjs-size-monitor,
      .chartjs-size-monitor-expand,
      .chartjs-size-monitor-shrink {
        position: absolute;
        direction: ltr;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
        pointer-events: none;
        visibility: hidden;
        z-index: -1;
      }

      .chartjs-size-monitor-expand > div {
        position: absolute;
        width: 1000000px;
        height: 1000000px;
        left: 0;
        top: 0;
      }

      .chartjs-size-monitor-shrink > div {
        position: absolute;
        width: 200%;
        height: 200%;
        left: 0;
        top: 0;
      }



      
        /*radar chart*/
        .circle1 {
        width: 280px;
        height: 280px;
        margin: auto;
        background-color: #fff;
        box-shadow: #333 0px 0px 10px;
        border-radius: 50%;
        position: relative !important;
        margin: auto;
        top: 100px;
      }
      .circle2 {
          width: 240px;
          height: 240px;
          margin: auto;
          background-color: rgb(255, 255, 255);
          box-shadow: rgb(204 204 204) 0px 0px 10px;
          border-radius: 50%;
          position: relative;
          top: 20px;
      }
      .circle3 {
        width: 155px;
        height: 155px;
        margin: auto;
        background-color: rgb(255, 255, 255);
        box-shadow: rgb(204 204 204) 0px 0px 15px;
        border-radius: 50%;
        position: relative;
        top: 35px;
      }

      .labelindic {
        position: absolute;
        left: 50%;
        z-index: 9999;
      }
      .labelindic span{text-transform:uppercase;font-size: 11px;}
      .labelindic a {
        color: #000;
        text-decoration: none;
        display:block;
        text-align:center;
      }

      .labelindic a:hover{text-decoration:underline;text-shadow:2px 2px 2px #ccc;}
      .nolink a:hover{text-decoration:none;cursor:default;}





      .pos-1-1 {
        margin-left: -21px;
        margin-top:65px;
      }



      .pos-1-2{
        margin-left: -21px;
        margin-top:65px;
      }
      .pos-2-2{
         margin-top: 390px;
        margin-left: -22px;
      }



      .pos-1-3 {
        margin-left: -21px;
        margin-top:65px;
      }
      .pos-2-3{
        margin-top: 300px;
        margin-left: 115px;
      }
      .pos-3-3{
        margin-left: -170px;
        top: 295px;
      }



      .pos-1-4 {
        margin-left: -21px;
        margin-top:65px;
      }
      .pos-2-4 {
        margin-top: 250px;
        margin-left: 135px;
      }
      .pos-3-4 {
        margin-top: 390px;
        margin-left: -22px;
      }
      .pos-4-4 {
        margin-top: 250px;
        margin-left: -185px;
        text-align: right;
      }


      .pos-1-5 {
        margin-left: -21px;
        margin-top:65px;
      }
      .pos-2-5{
        margin-left: 130px;
        margin-top:165px;
      }
      .pos-3-5{
        margin-top: 380px;
        margin-left: 84px;
        text-align: left;
      }
      .pos-4-5{
        margin-left: -133px;
        margin-top: 380px;
        text-align: left;
      }
      .pos-5-5{
        margin-top: 165px;
        margin-left: -185px;
        text-align: left;
      }


      .pos-1-6 {
        margin-left: -21px;
        margin-top:65px;
      }
      .pos-2-6 {
        margin-left: 120px;
        margin-top: 135px;
      }
      .pos-3-6 {
        margin-top: 322px;
        margin-left: 117px;
      }
      .pos-4-6 {
        margin-top: 390px;
        margin-left: -22px;
      }
      .pos-5-6 {
        margin-top: 320px;
        margin-left: -167px;
        text-align: right;
      }
      .pos-6-6 {
        margin-top: 132px;
        margin-left: -165px;
        text-align: right;
      }
      .mv-chart {    position: relative;
    bottom: 190px;}
    .mv-chart-canvas {
    display: block !important;
    height: 340px !important;
    width: 500px !important;
    position: relative;
    left: -55px !important;
    top: -19px !important;
}


    `;
  }

  constructor() {
    super();
    this.theme = "light";
    this.chart = null;
    this.valeur = null;
  }

  static get properties() {
    return {
      valeur: {
        type: Array
      }
    };
  }

  render() {
    return html`

<div style="transform: scale(1);">
  ${this.displayRadarHits()}

  <div class="circle1" style="position:relative;">
    <div class="circle2">
      <div class="circle3"></div>
    </div>
  </div>


  <div class="mv-chart">
    <canvas class="mv-chart-canvas" width="1024" height="720"></canvas>
  </div>

</div>


    `;
  }

  firstUpdated() {
    if (!this.chart) {
      const { type, data, options } = this;
      const plugins = this.plugins || [];
      plugins.push(ChartDataLabels);
      const canvas = this
        .shadowRoot
        .querySelector(".mv-chart-canvas")
        .getContext("2d");
      this.chart = new Chart(canvas, RADAR_CONFIG);

      console.log(data);



    }
  }

  displayRadarHits() {
    let i;
    let loop = new Array();
    this.valeur = new Array();

    let max = RADAR_CONFIG.data.labels.length;
    for (i = 0; i < max; i++) {

      this.valeur[i] = RADAR_CONFIG
        .data
        .datasets[0]
        .data[i];

      if (RADAR_CONFIG.data.links[i] != '') {
        loop[i] = html`
    <div class="label${i + 1} labelindic pos-${i + 1}-${max}">
      <a href="${RADAR_CONFIG
                .data
                .links[i]}" target="_blank">
        <!--<span>${RADAR_CONFIG
                .data
                .labels[i]}</span><br/>-->${this
  .valeur[i]} hits</a>
    </div>`;
      } else {

        loop[i] = html`
    <div class="label${i + 1} labelindic pos-${i + 1}-${max} nolink">
      <a>
        <!--<span>${RADAR_CONFIG
                .data
                .labels[i]}</span><br/>-->${this
  .valeur[i]} hits</a>
    </div>`;

      }

    }
    return loop;

  }



}

customElements.define("mv-chart-radar", MvChart);
