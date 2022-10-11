var getScriptPromisify = (src) => {
  return new Promise(resolve => {
    $.getScript(src, resolve)
  })
}

(function () {

  //Chart Block in HTML
  const prepared = document.createElement('template')
  prepared.innerHTML = `
      <div id="root" style="width: 100%; height: 900px;">
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
      this.render(this._resultSet)
      this.render(this._S1)
      this.render(this._S2)

    }

    //render() method to plot chart - resultSet1 holds data from SAC table/chart.
    async render() {
      await getScriptPromisify('https://cdn.amcharts.com/lib/4/core.js');
      await getScriptPromisify('https://cdn.amcharts.com/lib/4/themes/animated.js');
      await getScriptPromisify('https://cdn.amcharts.com/lib/4/charts.js');

     
am4core.useTheme(am4themes_animated);
// Themes end
var chart = am4core.create(this._root, am4charts.XYChart);
chart.logo.disabled = true;

var data = [
  {
    date: "2022-01-06T18:30:00.000Z",
    value: 58,
    valueb: 5
  },
  {
    date: "2022-02-06T18:30:00.000Z",
    value: 52,
    valueb: 5
  },
  {
    date: "2022-03-06T18:30:00.000Z",
    value: 52,
    valueb: 5
  },
  {
    date: "2022-04-06T18:30:00.000Z",
    value: 43,
    valueb: 5
  },
  {
    date: "2022-05-06T18:30:00.000Z",
    value: 41,
    valueb: 5
  },
  {
    date: "2022-06-06T18:30:00.000Z",
    value: 48,
    valueb: 5
  },
  {
    date: "2022-07-06T18:30:00.000Z",
    value: 56,
    valueb: 5
  },
  {
    date: "2022-08-06T18:30:00.000Z",
    value: 47,
    valueb: 5
  },
  {
    date: "2022-09-06T18:30:00.000Z",
    value: 57,
    valueb: 5
  },
  {
    date: "2022-10-06T18:30:00.000Z",
    value: 64,
    valueb: 5
  },
  {
    date: "2022-11-06T18:30:00.000Z",
    value: 70,
    valueb: 5
  },
  {
    date: "2022-12-06T18:30:00.000Z",
    value: 80,
    valueb: 5
  },
  {
    date: "2023-01-06T18:30:00.000Z",
    value: 81,
    valueb: 5
  },
  {
    date: "2023-02-06T18:30:00.000Z",
    value: 75,
    valueb: 5
  },
  {
    date: "2023-03-06T18:30:00.000Z",
    value: 68,
    valueb: 5
  },
  {
    date: "2023-04-06T18:30:00.000Z",
    value: 67,
    valueb: 5
  },
  {
    date: "2023-05-06T18:30:00.000Z",
    value: 70,
    valueb: 5
  },
  {
    date: "2023-06-06T18:30:00.000Z",
    value: 74,
    valueb: 5
  },
  {
    date: "2023-07-06T18:30:00.000Z",
    value: 70,
    valueb: 5
  },
  {
    date: "2023-08-06T18:30:00.000Z",
    value: 68,
    valueb: 5
  },
  {
    date: "2023-09-06T18:30:00.000Z",
    value: 72,
    valueb: 5
  },
  {
    date: "2023-10-06T18:30:00.000Z",
    value: 70,
    valueb: 5
  },
  {
    date: "2023-11-06T18:30:00.000Z",
    value: 66,
    valueb: 5
  },
  {
    date: "2023-12-06T18:30:00.000Z",
    value: 70,
    valueb: 5
  },
  {
    date: "2024-01-06T18:30:00.000Z",
    value: 75,
    valueb: 5
  },
  {
    date: "2024-02-06T18:30:00.000Z",
    value: 68,
    valueb: 5
  },
  {
    date: "2024-03-06T18:30:00.000Z",
    value: 72,
    valueb: 5
  },
  {
    date: "2024-04-06T18:30:00.000Z",
    value: 71,
    valueb: 5
  },
  {
    date: "2024-05-06T18:30:00.000Z",
    value: 67,
    valueb: 5
  },
  {
    date: "2024-06-06T18:30:00.000Z",
    value: 63,
    valueb: 5
  },
  {
    date: "2024-07-06T18:30:00.000Z",
    value: 63,
    valueb: 5
  },
  {
    date: "2024-08-06T18:30:00.000Z",
    valueAi: 58,
    valueb: 5
  },
  {
    date: "2024-09-06T18:30:00.000Z",
    valueAi: 67,
    valueb: 5
  },
  {
    date: "2024-10-06T18:30:00.000Z",
    valueAi: 76,
    valueb: 5
  },
  {
    date: "2024-11-06T18:30:00.000Z",
    valueAi: 81,
    valueb: 5
  },
  {
    date: "2024-12-06T18:30:00.000Z",
    valueAi: 89,
    valueb: 5
  },
  {
    date: "2025-01-06T18:30:00.000Z",
    valueAi: 95,
    valueb: 5
  },
  {
    date: "2025-02-06T18:30:00.000Z",
    valueAi: 96,
    valueb: 5
  },
  {
    date: "2025-03-06T18:30:00.000Z",
    valueAi: 89,
    valueb: 5
  },
  {
    date: "2025-04-06T18:30:00.000Z",
    valueAi: 94,
    valueb: 5
  },
  {
    date: "2025-05-06T18:30:00.000Z",
    valueAi: 100,
    valueb: 5
  },
  {
    date: "2025-06-06T18:30:00.000Z",
    valueAi: 99,
    valueb: 5
  },
  {
    date: "2025-07-06T18:30:00.000Z",
    valueAi: 104,
    valueb: 5
  },
  {
    date: "2025-08-06T18:30:00.000Z",
    valueAi: 108,
    valueb: 5
  },
  {
    date: "2025-09-06T18:30:00.000Z",
    valueAi: 100,
    valueb: 5
  },
  {
    date: "2025-10-06T18:30:00.000Z",
    valueAi: 90,
    valueb: 5
  },
  {
    date: "2025-11-06T18:30:00.000Z",
    valueAi: 93,
    valueb: 5
  },
  {
    date: "2025-12-06T18:30:00.000Z",
    valueAi: 90,
    valueb: 5
  },
  {
    date: "2022-01-06T18:30:00.000Z",
    valueD: null,
    valueb: 5
  },
  {
    date: "2022-02-06T18:30:00.000Z",
    valueD: 52,
    valueb: 5
  },
  {
    date: "2022-03-06T18:30:00.000Z",
    valueD: 52,
    valueb: 5
  },
  {
    date: "2022-04-06T18:30:00.000Z",
    valueD: 43,
    valueb: 5
  },
  {
    date: "2022-05-06T18:30:00.000Z",
    valueD: 41,
    valueb: 5
  },
  {
    date: "2022-06-06T18:30:00.000Z",
    valueD: 48,
    valueb: 5
  },
  {
    date: "2022-07-06T18:30:00.000Z",
    valueD: 56,
    valueb: 5
  },
  {
    date: "2022-08-06T18:30:00.000Z",
    valueD: 47,
    valueb: 5
  },
  {
    date: "2022-09-06T18:30:00.000Z",
    valueD: 57,
    valueb: 5
  },
  {
    date: "2022-10-06T18:30:00.000Z",
    valueD: 64,
    valueb: 5
  },
  {
    date: "2022-11-06T18:30:00.000Z",
    valueD: 70,
    valueb: 5
  },
  {
    date: "2022-12-06T18:30:00.000Z",
    valueD: 80,
    valueb: 5
  },
  {
    date: "2023-01-06T18:30:00.000Z",
    valueD: 81,
    valueb: 5
  },
  {
    date: "2023-02-06T18:30:00.000Z",
    valueD: 75,
    valueb: 5
  },
  {
    date: "2023-03-06T18:30:00.000Z",
    valueD: 68,
    valueb: 5
  },
  {
    date: "2023-04-06T18:30:00.000Z",
    valueD: 67,
    valueb: 5
  },
  {
    date: "2023-05-06T18:30:00.000Z",
    valueD: 70,
    valueb: 5
  },
  {
    date: "2023-06-06T18:30:00.000Z",
    valueD: 74,
    valueb: 5
  },
  {
    date: "2023-07-06T18:30:00.000Z",
    valueD: 70,
    valueb: 5
  },
  {
    date: "2023-08-06T18:30:00.000Z",
    valueD: 68,
    valueb: 5
  },
  {
    date: "2023-09-06T18:30:00.000Z",
    valueD: 72,
    valueb: 5
  },
  {
    date: "2023-10-06T18:30:00.000Z",
    valueD: 70,
    valueb: 5
  },
  {
    date: "2023-11-06T18:30:00.000Z",
    valueD: 66,
    valueb: 5
  },
  {
    date: "2023-12-06T18:30:00.000Z",
    valueD: 70,
    valueb: 5
  },
  {
    date: "2024-01-06T18:30:00.000Z",
    valueD: 75,
    valueb: 5
  },
  {
    date: "2024-02-06T18:30:00.000Z",
    valueD: 68,
    valueb: 5
  },
  {
    date: "2024-03-06T18:30:00.000Z",
    valueD: 72,
    valueb: 5
  },
  {
    date: "2024-04-06T18:30:00.000Z",
    valueD: 71,
    valueb: 5
  },
  {
    date: "2024-05-06T18:30:00.000Z",
    valueD: 67,
    valueb: 5
  },
  {
    date: "2024-06-06T18:30:00.000Z",
    valueD: 63,
    valueb: 5
  },
  {
    date: "2024-07-06T18:30:00.000Z",
    valueD: 63,
    valueb: 5
  },
  {
    date: "2024-08-06T18:30:00.000Z",
    valueD: 58,
    valueb: 5
  },
  {
    date: "2024-09-06T18:30:00.000Z",
    valueD: 67,
    valueb: 5
  },
  {
    date: "2024-10-06T18:30:00.000Z",
    valueD: 76,
    valueb: 5
  },
  {
    date: "2024-11-06T18:30:00.000Z",
    valueD: 81,
    valueb: 5
  },
  {
    date: "2024-12-06T18:30:00.000Z",
    valueD: 89,
    valueb: 5
  },
  {
    date: "2025-01-06T18:30:00.000Z",
    valueD: 95,
    valueb: 5
  },
  {
    date: "2025-02-06T18:30:00.000Z",
    valueD: 96,
    valueb: 5
  },
  {
    date: "2025-03-06T18:30:00.000Z",
    valueD: 89,
    valueb: 5
  },
  {
    date: "2025-04-06T18:30:00.000Z",
    valueD: 94,
    valueb: 5
  },
  {
    date: "2025-05-06T18:30:00.000Z",
    valueD: 100,
    valueb: 5
  },
  {
    date: "2025-06-06T18:30:00.000Z",
    valueD: 99,
    valueb: 5
  },
  {
    date: "2025-07-06T18:30:00.000Z",
    valueD: 104,
    valueb: 5
  },
  {
    date: "2025-08-06T18:30:00.000Z",
    valueD: 108,
    valueb: 5
  },
  {
    date: "2025-09-06T18:30:00.000Z",
    valueD: 100,
    valueb: 5
  },
  {
    date: "2025-10-06T18:30:00.000Z",
    valueD: 90,
    valueb: 5
  },
  {
    date: "2025-11-06T18:30:00.000Z",
    valueD: 93,
    valueb: 5
  },
  {
    date: "2025-12-06T18:30:00.000Z",
    valueD: 90,
    valueb: 5
  }
];

chart.data = data;
// Create axes

var dateAxistwo = chart.xAxes.push(new am4charts.DateAxis());
dateAxistwo.renderer.minGridDistance = 80;
dateAxistwo.renderer.grid.template.disabled = true;
dateAxistwo.cursorTooltipEnabled = false;
dateAxistwo.dateFormatter.dateFormat = "[bold]yyyy[/]";
dateAxistwo.baseInterval = {
  timeUnit: "year",
  count: 1
};

dateAxistwo.renderer.labels.template.dx = -115;

var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
dateAxis.renderer.minGridDistance = 80;
dateAxis.renderer.grid.template.disabled = true;
dateAxis.cursorTooltipEnabled = false;
dateAxis.periodChangeDateFormats.setKey("month", "MMM");
dateAxis.dateFormatter.dateFormat = "MMM yyyy";
dateAxis.renderer.labels.template.dx = 0;
dateAxis.renderer.grid.template.location = 0;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
// valueAxis.renderer.grid.template.disabled = true;
valueAxis.cursorTooltipEnabled = false;

var valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis2.max = 1;
valueAxis2.min = 0;
valueAxis2.marginTop = 0;
valueAxis2.marginBottom = 0;
valueAxis2.height = am4core.percent(15);
valueAxis2.renderer.grid.template.disabled = true;
valueAxis2.cursorTooltipEnabled = false;
valueAxis2.renderer.labels.template.fill = am4core.color("#ffffff");

var valueAxis1 = chart.yAxes.push(new am4charts.ValueAxis());
// valueAxis1.renderer.grid.template.disabled = true;
valueAxis1.cursorTooltipEnabled = false;

// Create series
var series = chart.series.push(new am4charts.LineSeries());
series.dataFields.valueY = "value";
series.dataFields.dateX = "date";
series.strokeWidth = 1;
series.xAxis = dateAxis;
series.tooltipText = "{date} : {value}";
series.tooltip.pointerOrientation = "vertical";

var series1 = chart.series.push(new am4charts.LineSeries());
series1.dataFields.valueY = "valueAi";
series1.dataFields.dateX = "date";
series1.strokeWidth = 1;
series1.xAxis = dateAxis;
series1.yAxis = valueAxis1;
series1.stroke = am4core.color("#C4A484");
series1.fill = am4core.color("#C4A484");
series1.tooltipText = "{date} : {valueAi}";

var series2 = chart.series.push(new am4charts.ColumnSeries());
series2.dataFields.valueY = "valueb";
series2.dataFields.dateX = "date";
series2.strokeWidth = 1;
series2.xAxis = dateAxis;
series2.yAxis = valueAxis2;
series2.stroke = am4core.color("#ffffff");
series2.fill = am4core.color("#ffffff");
series2.columns.template.width = am4core.percent(100);

var Dummy = chart.series.push(new am4charts.LineSeries());
Dummy.dataFields.valueY = "valueD";
Dummy.dataFields.dateX = "date";
Dummy.xAxis = dateAxistwo;
Dummy.hidden = true;

var abc = ["2022", "2023", "2024", "2025"];
for (var i = 0; i < abc.length; i++) {
  var range = dateAxis.axisRanges.create();
  range.date = new Date("Jan" + " " + abc[i]);
}

// var range = dateAxis.axisRanges.create();
// range.date = new Date("2024-08-06T18:30:00.000Z");

chart.cursor = new am4charts.XYCursor();
chart.cursor.xAxis = dateAxis;
chart.cursor.lineY.disabled = true;

chart.scrollbarX = new am4core.Scrollbar();
chart.scrollbarX.parent = chart.bottomAxesContainer;
chart.leftAxesContainer.layout = "vertical";

var circleBullet = series1.bullets.push(new am4charts.CircleBullet());
circleBullet.circle.radius = 3;

var bullet = series.bullets.push(new am4charts.Bullet());
var square = bullet.createChild(am4core.Rectangle);
square.width = 5;
square.height = 5;
square.horizontalCenter = "middle";
square.verticalCenter = "middle";


    }
  }
  customElements.define('com-sap-sample-lineareamodify-prepared', SamplePrepared)
})()
