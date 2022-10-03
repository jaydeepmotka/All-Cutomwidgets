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


    }

    //render() method to plot chart - resultSet1 holds data from SAC table/chart.
    async render(resultSet) {
      await getScriptPromisify('https://cdn.amcharts.com/lib/5/index.js');
      await getScriptPromisify('https://cdn.amcharts.com/lib/5/xy.js');
      await getScriptPromisify('https://cdn.amcharts.com/lib/5/themes/Animated.js');

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new(this._root);


// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Animated.new(root)
]);


// Create chart
// https://www.amcharts.com/docs/v5/charts/xy-chart/
var chart = root.container.children.push(am5xy.XYChart.new(root, {
  panX: true,
  panY: true,
  wheelX: "panX",
  wheelY: "zoomX",
  pinchZoomX:true
}));

// Add cursor
// https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
cursor.lineY.set("visible", false);


// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 5 });
xRenderer.labels.template.setAll({
  rotation: -90,
  centerY: am5.p50,
  centerX: am5.p100,
  paddingRight: 15
});

var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
  maxDeviation: 0.3,
  categoryField: "country",
  renderer: xRenderer,
  tooltip: am5.Tooltip.new(root, {})
}));

var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
  maxDeviation: 0.3,
  renderer: am5xy.AxisRendererY.new(root, {})
}));

const xAxisRenderer = xAxis.get('renderer');
    xAxisRenderer.grid.template.setAll({ disabled: true, visible: false });//hides all
    // yAxisRenderer.labels.template.setAll({ disabled: true, visible: false }); //hides all
// Create series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
var series = chart.series.push(am5xy.ColumnSeries.new(root, {
  name: "Series 1",
  xAxis: xAxis,
  yAxis: yAxis,
  valueYField: "value",
  sequencedInterpolation: true,
  categoryXField: "country",
  tooltip: am5.Tooltip.new(root, {
    labelText:"{valueY}"
  })
}));

series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5 });
series.columns.template.adapters.add("fill", function(fill, target) {
  return chart.get("colors").getIndex(series.columns.indexOf(target));
});

series.columns.template.adapters.add("stroke", function(stroke, target) {
  return chart.get("colors").getIndex(series.columns.indexOf(target));
});
console.log(resultSet);
var data1=[];
for(var i=0; i<resultSet.length; i++){
    
      data1.push({"country":resultSet[i].State.description,
      "value":parseFloat(resultSet[i]["@MeasureDimension"].rawValue)});
}
console.log(data1);

// Set data

xAxis.data.setAll(data1);
series.data.setAll(data1);


// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
series.appear(1000);
chart.appear(1000, 100);


    }
  }
  customElements.define('com-sap-sample-map-prepared', SamplePrepared)
})()
