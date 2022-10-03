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
    async render() {
      await getScriptPromisify('https://cdn.amcharts.com/lib/4/core.js');
      await getScriptPromisify('https://cdn.amcharts.com/lib/4/themes/animated.js');
      await getScriptPromisify('https://cdn.amcharts.com/lib/4/geodata/data/countries2.js');
      await getScriptPromisify('https://cdn.amcharts.com/lib/4/maps.js');
      // await getScriptPromisify('https://cdn.amcharts.com/lib/4/geodata/worldLow.js');
      // await getScriptPromisify('https://covid.amcharts.com/data/js/world_timeline.js');
      // await getScriptPromisify('https://covid.amcharts.com/data/js/total_timeline.js');

     /**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

window.onload = function() {

/**
 * This demo uses our own method of determining user's location
 * It is not public web service that you can use
 * You'll need to find your own. We recommend http://www.maxmind.com
 */
jQuery.getJSON( "https://www.amcharts.com/tools/country/?v=xz6Z", function( geo ) {

  // Default map
  var defaultMap = "usaAlbersLow";
  
  // calculate which map to be used
  var currentMap = defaultMap;
  var title = "";
  if ( am4geodata_data_countries2[ geo.country_code ] !== undefined ) {
    currentMap = am4geodata_data_countries2[ geo.country_code ][ "maps" ][ 0 ];

    // add country title
    if ( am4geodata_data_countries2[ geo.country_code ][ "country" ] ) {
      title = am4geodata_data_countries2[ geo.country_code ][ "country" ];
    }

  }
  
  // Create map instance
  var chart = am4core.create(this._root, am4maps.MapChart);
  
  chart.titles.create().text = title;

  // Set map definition
  chart.geodataSource.url = "https://www.amcharts.com/lib/4/geodata/json/" + currentMap + ".json";
  chart.geodataSource.events.on("parseended", function(ev) {
    var data = [];
    for(var i = 0; i < ev.target.data.features.length; i++) {
      data.push({
        id: ev.target.data.features[i].id,
        value: Math.round( Math.random() * 10000 )
      })
    }
    polygonSeries.data = data;
  })

  // Set projection
  chart.projection = new am4maps.projections.Mercator();

  // Create map polygon series
  var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

  //Set min/max fill color for each area
  polygonSeries.heatRules.push({
    property: "fill",
    target: polygonSeries.mapPolygons.template,
    min: chart.colors.getIndex(1).brighten(1),
    max: chart.colors.getIndex(1).brighten(-0.3)
  });

  // Make map load polygon data (state shapes and names) from GeoJSON
  polygonSeries.useGeodata = true;

  // Set up heat legend
  let heatLegend = chart.createChild(am4maps.HeatLegend);
  heatLegend.series = polygonSeries;
  heatLegend.align = "right";
  heatLegend.width = am4core.percent(25);
  heatLegend.marginRight = am4core.percent(4);
  heatLegend.minValue = 0;
  heatLegend.maxValue = 40000000;
  heatLegend.valign = "bottom";

  // Set up custom heat map legend labels using axis ranges
  var minRange = heatLegend.valueAxis.axisRanges.create();
  minRange.value = heatLegend.minValue;
  minRange.label.text = "Little";
  var maxRange = heatLegend.valueAxis.axisRanges.create();
  maxRange.value = heatLegend.maxValue;
  maxRange.label.text = "A lot!";

  // Blank out internal heat legend value axis labels
  heatLegend.valueAxis.renderer.labels.template.adapter.add("text", function(labelText) {
    return "";
  });

  // Configure series tooltip
  var polygonTemplate = polygonSeries.mapPolygons.template;
  polygonTemplate.tooltipText = "{name}: {value}";
  polygonTemplate.nonScalingStroke = true;
  polygonTemplate.strokeWidth = 0.5;

  // Create hover state and set alternative fill color
  var hs = polygonTemplate.states.create("hover");
  hs.properties.fill = chart.colors.getIndex(1).brighten(-0.5);
  
});

};



    }
  }
  customElements.define('com-sap-sample-map-prepared', SamplePrepared)
})()
