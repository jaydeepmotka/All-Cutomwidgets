var getScriptPromisify = (src) => {
return new Promise(resolve => {
  $.getScript(src, resolve)
})
}

(function () {

//Chart Block in HTML
const prepared = document.createElement('template')
prepared.innerHTML = `
    <div id="root" style="width: 100%; height: 100%;">
    </div>
  `
//Main JS Class holds methods to be called
class SamplePrepared extends HTMLElement {
  constructor() {

    //call SAC DOM Super method to get shadow DOM information
    super()

    //Get shadow DOM informations
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this._shadowRoot.appendChild(prepared.content.cloneNode(true))

    //Set HTML block in shadow DOM of SAC
    this._root = this._shadowRoot.getElementById('root')

    //_props object is used to hold properties infosrmation
    this._props = {}

    //Call render() method to plot chart
    this.render()

  }

  //render() method to plot chart - resultSet1 holds data from SAC table/chart.
  async render() {
    await getScriptPromisify('https://code.highcharts.com/highcharts.js');
    await getScriptPromisify('https://code.highcharts.com/modules/exporting.js');
    await getScriptPromisify('https://code.highcharts.com/modules/export-data.js');
    await getScriptPromisify('https://code.highcharts.com/modules/accessibility.js');

    Highcharts.chart(this._root, {
      chart: {
        type: 'column'
      },
      title:{
        text:''
      },
      exporting: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      xAxis: {
        categories: [
          '2010',
          '2011',
          '2012',
          '2013',
          '2014',
          '2015',
          '2016',
          '2017',
          '2018',
          '2019',
          '2010',
          '2021'
        ],
        crosshair: true
      },
      yAxis: {
        title: {
          useHTML: true,
          text: 'Million tonnes CO<sub>2</sub>-equivalents'
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.1,
          borderWidth: 1
        }
      },
      series: [{
        name: 'Oil and gas extraction',
        data: [13.93, 13.63, 13.73, 13.67, 14.37, 14.89, 14.56,
                14.32, 14.13, 13.93, 13.21, 12.16]
    
      }, {
        name: 'Manufacturing industries and mining',
        data: [12.24, 12.24, 11.95, 12.02, 11.65, 11.96, 11.59,
                11.94, 11.96, 11.59, 11.42, 11.76]
    
      }, {
        name: 'Road traffic',
        data: [10.00, 9.93, 9.97, 10.01, 10.23, 10.26, 10.00,
                9.12, 9.36, 8.72, 8.38, 8.69]
    
      }, {
        name: 'Agriculture',
        data: [4.35, 4.32, 4.34, 4.39, 4.46, 4.52, 4.58, 4.55,
                4.53, 4.51, 4.49, 4.57]
    
      }]
    });
  }
}
customElements.define('com-sap-sample-highchart-barchart-prepared', SamplePrepared)
})()