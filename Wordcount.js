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
    async render(result) {
      await getScriptPromisify('https://cdn.amcharts.com/lib/4/core.js');
      await getScriptPromisify('https://cdn.amcharts.com/lib/4/themes/animated.js');
      await getScriptPromisify('https://cdn.amcharts.com/lib/4/charts.js');
      await getScriptPromisify('https://cdn.amcharts.com/lib/4/plugins/wordCloud.js');

      var chart = am4core.create(this._root, am4plugins_wordCloud.WordCloud);
      chart.fontFamily = "Courier New";
      var series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
      series.randomness = 0.1;
      series.rotationThreshold = 0.5;
      
      series.data = result;
      series.dataFields.word = "tag";
      series.dataFields.value = "count";
      
      series.heatRules.push({
       "target": series.labels.template,
       "property": "fill",
       "min": am4core.color("#0000CC"),
       "max": am4core.color("#CC00CC"),
       "dataField": "value"
      });
      
      series.labels.template.tooltipText = "{word}: {value}";
      
      var hoverState = series.labels.template.states.create("hover");
      hoverState.properties.fill = am4core.color("#FF0000");

    }
  }
  customElements.define('com-sap-sample-wordcount-prepared', SamplePrepared)
})()