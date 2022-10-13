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

  onCustomWidgetResize (width, height) {
    this.render()
  }

  //render() method to plot chart - resultSet1 holds data from SAC table/chart.
  async render() {
    await getScriptPromisify('https://fastly.jsdelivr.net/npm/echarts@5.4.0/dist/echarts.min.js');
  
    // Themes begin
    // var dom = document.getElementById(this._root);
    var myChart = echarts.init(this._root);
    var app = {};
    
    var option;
    
    option = {
      graphic: {
        elements: [
          {
            type: 'group',
            left: 'center',
            top: 'center',
            children: new Array(7).fill(0).map((val, i) => ({
              type: 'rect',
              x: i * 20,
              shape: {
                x: 0,
                y: -20,
                width: 6,
                height: 40
              },
              style: {
                fill: '#5470c6'
              },
              keyframeAnimation: {
                duration: 1000,
                delay: i * 200,
                loop: true,
                keyframes: [
                  {
                    percent: 0.5,
                    scaleY: 0.3,
                    easing: 'cubicIn'
                  },
                  {
                    percent: 1,
                    scaleY: 1,
                    easing: 'cubicOut'
                  }
                ]
              }
            }))
          }
        ]
      }
    };
    
    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }
    
    window.addEventListener('resize', myChart.resize);

  }
}
customElements.define('com-sap-sample-loding-prepared', SamplePrepared)
})()