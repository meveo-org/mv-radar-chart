export const RADAR_CONFIG = {
  type: 'radar',
  label: 'hits',
  data: {
    labels: [
      'Android',
      'Apple',
      'Microsoft',
      'Huawai',
      'Sony',
      'Huawai'



    ],
    loader: [],
    links: [
      'http://google.com',
      'http://apple.com',
      '',
      'http://facebook.com',
      'http://instagram.com',
      'http://asus.com'
    ],
    datasets: [{
      data: [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100),Math.floor(Math.random() * 100)],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0)',
      borderColor: '#FF1A44',
      pointBackgroundColor: 'rgb(255, 255, 255)',
      pointBorderColor: 'black',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)',

    }]
  },
  options: {




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
};

