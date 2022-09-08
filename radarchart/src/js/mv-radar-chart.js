import { LitElement, html, css } from "lit";
import "../lib/chart.min.js";
import "../lib/chartjs-plugin-datalabels.min.js";


export class MvChart extends LitElement {
  static get properties() {
    return {

      data: {
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

        font-size:18px;
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
        text-align:center;
      }
      .pos-2-2{
         margin-top: 390px;
        margin-left: -22px;
        text-align:center;
      }



      .pos-1-3 {
        margin-left: -21px;
        margin-top:65px;
        text-align:center;
      }
      .pos-2-3{
        margin-top: 310px;
        margin-left: 135px;
        text-align :  left;
      }
      .pos-3-3{
        margin-left: -200px;
        top: 310px;
        text-align:right;
      }



      .pos-1-4 {
        margin-left: -21px;
        margin-top:65px;
      }
      .pos-2-4 {
        margin-top: 225px;
        margin-left: 150px;
      }
      .pos-3-4 {
        margin-top: 390px;
        margin-left: -22px;
        text-align:center;
      }
      .pos-4-4 {
        margin-top: 225px;
        margin-left: -205px;
        text-align: right;
      }


      .pos-1-5 {
        margin-left: -21px;
        margin-top:65px;
        text-align:center;
      }
      .pos-2-5 {
          margin-left: 150px;
          margin-top: 175px;
          text-align:left;
      }
      .pos-3-5{
        margin-top: 380px;
        margin-left: 84px;
        text-align: left;
      }
      .pos-4-5{
        margin-left: -133px;
        margin-top: 380px;
        text-align: right;
      }
      .pos-5-5{
        margin-top: 165px;
        margin-left: -190px;
        text-align: right;
      }


      .pos-1-6 {
        margin-left: -21px;
        margin-top:65px;
        text-align:center;
      }
      .pos-2-6 {
        margin-left: 120px;
        margin-top: 135px;
        text-align:left;
      }
      .pos-3-6 {
        margin-top: 322px;
        margin-left: 117px;
        text-align:left;
      }
      .pos-4-6 {
        margin-top: 390px;
        margin-left: -22px;
        text-align:center;
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






      .pos-1-7 {
        margin-left: -21px;
        margin-top:65px;
        text-align:center;
      }
      .pos-2-7 {
        margin-left: 120px;
        margin-top: 135px;
        text-align:left;
      }
      .pos-3-7 {
    margin-top: 270px;
    margin-left: 145px;
    text-align:left;
}
.pos-4-7 {
    margin-top: 383px;
    margin-left: 50px;
    text-align:left;
}
.pos-5-7 {
    margin-top: 383px;
    margin-left: -95px;
    text-align: right;
}
.pos-6-7 {
    margin-top: 268px;
    margin-left: -198px;
    text-align: right;
}

.pos-7-7 {
    margin-top: 130px;
    margin-left: -170px;
    text-align: right;
}




.pos-1-8 {
        margin-left: -21px;
        margin-top:65px;
        text-align:center;
      }
      .pos-2-8 {
    margin-left: 100px;
    margin-top: 105px;
    text-align:left;
}
      .pos-3-8 {
    margin-top: 220px;
    margin-left: 145px;
    text-align:left;
}
.pos-4-8 {
    margin-top: 334px;
    margin-left: 107px;
    text-align:left;
}
.pos-5-8 {
    margin-top: 386px;
    margin-left: -28px;
    text-align: center;
}
.pos-6-8 {
    margin-top: 340px;
    margin-left: -150px;
    text-align: right;
}

.pos-7-8 {
    margin-top: 215px;
    margin-left: -202px;
    text-align: right;
}
.pos-8-8 {
    margin-top: 105px;
    margin-left: -161px;
    text-align: right;
}



      .mv-chart {    position: relative;
    bottom: 190px;}
    .mv-chart-canvas {
    position: relative;
    display: block !important;
    height: 318px !important;
    width: 440px !important;
    left: -20px !important;
    top: -10px !important;
}


    `;
  }

  constructor() {
    super();
    this.theme = "light";
    this.chart = null;
    this.valeur = null;
    this.data;

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
   


      const { data } = this;
      const plugins = this.plugins || [];
      plugins.push(ChartDataLabels);
      const canvas = this
        .shadowRoot
        .querySelector(".mv-chart-canvas")
        .getContext("2d");
      this.chart = new Chart(canvas,  data );





    }
  }

  displayRadarHits() {



    
    let i;
    let loop = new Array();
    this.valeur = new Array();
    let max = this.data.data.labels.length;
    for (i = 0; i < max; i++) {

      this.valeur[i] = this
        .data.data
        .datasets[0]
        .data[i];



      this.data.data.loader[i] = this.data.data.labels[i];
      this.data.data.labels[i] = '';



      if (this.data.data.links[i] != '') {






        loop[i] = html`
    <div class="label${i + 1} labelindic pos-${i + 1}-${max}">
      <a href="${this
                .data.data
                .links[i]}" target="_blank">
        <span>${this
                .data.data
                .loader[i]}</span><br/>${this
                    .valeur[i]} ${this.data.label}</a>
    </div>`;
      } else {

        loop[i] = html`
    <div class="label${i + 1} labelindic pos-${i + 1}-${max} nolink">
      <a>
        <span>${this
                .data.data
                .loader[i]}</span><br/>${this
                    .valeur[i]} ${this.data.label}</a>
    </div>`;

      }

    }
    return loop;

  }



}

customElements.define("mv-chart-radar", MvChart);
