export const RADAR_OPTIONS ={
    legend: {
      display: false,
      title: false,
      labels: {
        usePointStyle: false,
      },
      datalabels: {
        display: false,
      },


    },
    tooltips: {
      enabled: false,
    },

    gridLines: {
      display: false
    },
    scale: {
      y: {
        ticks: {
          // For a category axis, the val is the index so the lookup via getLabelForValue is needed
          callback: function (val, index) {
            // Hide every 2nd tick label
            return index % 2 === 0 ? this.getLabelForValue(val) : '';
          },
          color: 'red',
        }
      },

      ticks: {
        maxTicksLimit: 1,
        display: false,
        drawTicks: false,
        display: false
      },
      gridLines: {
        drawOnChartArea: false,
        display: false
      },
      pointLabel: {
        display: false
      }
    },
    plugins: {
      datalabels: { display: false }
    },

    elements: {
      line: {
        borderWidth: 3
      }
    }
  }