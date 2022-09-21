# mv-radar-chart

MvRadarChart is a Meveo chart component (based on lit-element) that renders a content chart.  This is a component wrapper for [chartjs](https://www.chartjs.org/)

## Quick Start

To experiment with the MvRadarChart component.

1. Clone this repo.

2. Serve the project from the root directory with some http server (best served with meveo itself)

3. Update the chart demo component in demo.js file

## Sample usage

```html
<mv-chart-radar
.data="${RADAR}" // data properties
.theme="${this.theme}" // theme is either "light" or "dark">
</mv-chart-radar>
```

The chart has the following properties:
```javascript
{
    labels: ['',''], // data labels
    links: ['',''], // data links
    loader: [], // keep empty
    datasets: [{
      data: [10, 20], // datas
      fill: true, // radar style
      backgroundColor: 'rgba(255, 99, 132, 0)', //radar style
      borderColor: '#FF1A44', //radar style
      pointBackgroundColor: 'rgb(255, 255, 255)', //radar style
      pointBorderColor: 'black', //radar style
      pointHoverBackgroundColor: '#fff', //radar style
      pointHoverBorderColor: 'rgb(255, 99, 132)', //radar style
    }]
  }
```

You can also check this [demo](https://chart.meveo.org/)

## Acknowledgement
Uses [chartjs](https://www.chartjs.org/) library for rendering the charts