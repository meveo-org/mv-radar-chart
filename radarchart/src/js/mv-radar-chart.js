import { LitElement, html, css } from 'lit';
import { Chart,RadarController,ArcElement,RadialLinearScale, PointElement, LineElement} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(RadarController,ArcElement,RadialLinearScale,PointElement,LineElement,);

function convertToChrtJsFormat(input) {
  return {
    type: 'radar',
    label: 'hits',
    data: {
      labels: input.map((item) => item.name),
      links: input.map((item) => item.link),
      loader: [],
      datasets : [{
        data: input.map((item) => item.data),
        fill: true,
        backgroundColor : 'rgba(255, 99, 132, 0)',
        borderColor : '#FF1A44',
        pointBackgroundColor : 'rgb(255, 255, 255)',
        pointBorderColor : 'black',
        pointHoverBackgroundColor : '#fff',
        pointHoverBorderColor : 'rgb(255, 99, 132)'
      }]},
    options : {
      scale : {
        y:{
          ticks : {
          }
        }
      },
      ticks : { maxTicksLimit : 1 }
    }
  }
}

export default class MvChart extends LitElement {
  static get properties() {
    return {
      data: {
        type: Object,
        attribute: false,
        reflect: true,
      },

      //  valid theme values are: "light", "dark"    default: "light"
      theme: {
        type: String,
        attribute: true,
      },
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
        box-shadow: #aaa 0px 0px 30px;
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
        width: 100px;
        margin-left: -50px;
        text-align: center;
        top: 225px;
      }

      .labelindic span {
        text-transform: uppercase;
        font-size: 18px;
        position: relative;
        display: block;
        line-height: 9px;
      }

      .labelindic span span {
        font-size: 11px;
        text-transform: capitalize;
      }

      /*  .labelindic:nth-child(2n) span{transform:180deg;}*/

      .labelindic a {
        color: rgb(0, 0, 0);
        text-decoration: none;
        display: block;
        transform-origin: 250px center;
        transform: rotate(90deg);
        position: relative;
        font-size: 18px;
        right: 200px;
      }

      .labelindic a:hover img {
        display: block !important;
        position: absolute;
        left: 80px;
        bottom: 10px;
        transform: scale(0.7);
      }

      .nolink a:hover {
        text-decoration: none;
        cursor: default;
      }

      .mv-chart {
        position: relative;
        bottom: 190px;
      }
      .mv-chart-canvas {
        position: relative;
        display: block !important;
        height: 320px !important;
        width: 320px !important;
        left: 40px !important;
        top: -16px !important;
      }
    `;
  }

  constructor() {
    super();
    this.theme = 'light';
    this.chart = null;
    this.valeur = null;
  }

  render() {
    this.data = convertToChrtJsFormat(this.data);
    return html`
      <div style="transform: scale(1.1);">
      
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

  updated() {
    this.displayChart();

    //  this.displayRadarHits()
  }

  displayChart() {
    if (this.chart) {
      this.chart.destroy();
    }
    const plugins = this.plugins || [];
    plugins.push(ChartDataLabels);
    const canvas = this.shadowRoot
      .querySelector('.mv-chart-canvas')
      .getContext('2d');
    this.chart = new Chart(canvas, this.data);
  }

  

  displayRadarHits() {
    let i;
    const loop = [];
    this.valeur = [];
    const max = this.data.data.labels.length;

    const positionDeg = [];
    const ratio = 360 / max;
    const pos = [];

    for (i = 0; i < max; i += 1) {
      this.valeur[i] = this.data.data.datasets[0].data[i];

      if (this.data.data.labels[i] !== '') {
        this.data.data.loader[i] = this.data.data.labels[i];
      } else {
        this.data.data.labels[i] = this.data.data.loader[i];
      }

      this.data.data.labels[i] = '';

      positionDeg[i] = ratio * i;

      pos[i] = -90 * (i + 1) - positionDeg[i] - 90 * (i + 1) - 90;

      if (i % 2 === 0) {
        pos[i] = pos[i] + 180;
      }

      if (this.data.data.links[i] !== '') {
        loop[i] = html`
          <div
            class="label${i + 1} labelindic pos-${i + 1}-${max}"
            style="transform: rotate(${positionDeg[i]}deg);"
          >
            <a href="${this.data.data.links[i]}" target="_blank">
              <span style="transform:rotate(${pos[i]}deg);">
                <img
                  src="./radarchart/src/img/fiche-radar.svg"
                  style="display:none;"
                />
                <span>${this.data.data.loader[i]}</span>
                <br />
                ${this.valeur[i]} ${this.data.label}
              </span>
            </a>
          </div>
        `;
      } else {
        loop[i] = html`
          <div
            class="label${i + 1} labelindic pos-${i + 1}-${max} nolink"
            style="transform: rotate(${positionDeg[i]}deg);"
          >
            <a>
              <span style="transform:rotate(${pos[i]}deg);">
                <span>${this.data.data.loader[i]}</span>
                <br />
                ${this.valeur[i]} ${this.data.label}
              </span>
            </a>
          </div>
        `;
      }
    }
    return loop;
  }
}

customElements.define('mv-chart-radar', MvChart);
