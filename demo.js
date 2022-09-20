import { LitElement, html, css } from "lit";
//import "mv-container";
import "./radarchart/src/js/mv-radar-chart.js";
import { RADAR_DATAS } from "./radarchart/src/js/data.js";
import { RADAR_OPTIONS } from "./radarchart/src/js/config.js";
const RADAR = JSON.parse(
  '{ "type": "radar","label": "hits", "loader": [], "type": "radar", "label": "hits", "data":' +
    JSON.stringify(RADAR_DATAS) +
    ', "options" :' +
    JSON.stringify(RADAR_OPTIONS) +
    '}',
)
export class MvChartBubbleDemo extends LitElement {
  static get properties() {
    return {
      theme: { type: String, attribute: true },
      RADAR_OPTIONS: {
        type: Object,
        attribute: false,
        reflect: true,
      },
      RADAR_DATAS: {
        type: Object,
        attribute: false,
        reflect: true,
      },
      DONUT: {
        type: Object,
        attribute: false,
        reflect: true,
      },
    };
  }

  static get styles() {
    return css`
      :host {
        font-family: var(--font-family, Arial);
        font-size: var(--font-size-m, 10pt);
      }

      fieldset > label,
      label > input {
        cursor: pointer;
      }

      fieldset {
        width: 120px;
        margin-left: 10px;
        border: 2px solid red;
        -moz-border-radius: 8px;
        -webkit-border-radius: 8px;
        border-radius: 8px;
        color: #818181;
      }

      legend {
        font-weight: 500;
        color: red;
      }

      .mv-chart-demo {
        --mv-chart-margin: auto;
        --mv-chart-height: 500px;
        --mv-chart-width: 600px;
      }

      .main-container {
        --mv-container-min-width: 1000px;
      }

      .dashboard-sample {
        --mv-container-min-width: 950px;
        --mv-container-padding: 40px;
      }

      .dashboard-container {
        display: grid;
        grid-template-columns: 450px 450px;
        grid-template-rows: 290px 290px;
        grid-gap: 0;
      }

      .dashboard-grid {
        display: grid;
        grid-template-columns: 250px 250px;
        grid-template-rows: 290px 290px;
        grid-gap: 0;
      }

      textarea {
        position: fixed;
        display: block;
        left: 0px;
        top: 10%;
        min-height: 80% !important;
        min-width: 200px !important;
        box-shadow: 10px 10px 10px #ccc;
        border-radius: 0px 20px 20px 0px;
        padding: 50px 20px;
      }
    `;
  }

  constructor() {
    super();
    this.theme = "light";
  }

  firstUpdated() {

  }

  render() {
    return html`
      <fieldset>
        <legend>Theme</legend>
        <label>
          <input type="radio" name="theme" value="light" checked @change="${this.changeTheme}" />Light
        </label>
        <label>
          <input type="radio" name="theme" value="dark" @change="${this.changeTheme}" />Dark
        </label>
      </fieldset>
      
      <mv-container class="main-container" .theme="${this.theme}">
        <mv-chart-radar .data="${RADAR}"></mv-chart-radar>
      </mv-container>




      <textarea
        id="data-donut"
        @change="${this.getNewVal}"
      >

      ${JSON.stringify(RADAR_DATAS)}
      
  </textarea>

    `;
  }

  changeTheme = (originalEvent) => {
    const {
      target: { value },
    } = originalEvent;
    this.theme = value;
  }

  
  getNewVal() {
    let start = '{ "type": "radar","label": "hits",    "type": "radar", "label": "hits", "data": '

    let newVal = this.shadowRoot.querySelector('textarea').value

    let end =',"options":{"legend":{"display":false,"title":false,"labels":{"usePointStyle":false},"datalabels":{"display":false}},"tooltips":{"enabled":false},"gridLines":{"display":false},"scale":{"y":{"ticks":{"color":"red"}},"ticks":{"maxTicksLimit":1,"display":false,"drawTicks":false},"gridLines":{"drawOnChartArea":false,"display":false},"pointLabel":{"display":false}},"plugins":{"datalabels":{"display":false}},"elements":{"line":{"borderWidth":3}}}}'

    newVal = start + newVal + end

   

    newVal = JSON.parse(newVal)

    console.log(newVal)

    /* TODO Uncaught SyntaxError: Expected double-quoted property name in JSON at position 41 */

    this.shadowRoot.querySelector('mv-chart-radar').data = newVal

    this.shadowRoot.querySelector('mv-chart-radar').displayRadarHits()
    this.shadowRoot.querySelector('mv-chart-radar').displayChart()
  





  }

}






customElements.define("mv-chart-bubble-demo", MvChartBubbleDemo);
