var getScriptPromisify = (src) => {
  return new Promise(resolve => {
    $.getScript(src, resolve)
  })
}

(function () {

  //Chart Block in HTML
  const prepared = document.createElement('template')
  prepared.innerHTML = `<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
  ul, #myUL
  {
      list-style-type: none;
  }
   
  #myUL
  {
      margin: 0;
      padding: 0;
  }
   
  .box
  {
      cursor: pointer;
      -webkit-user-select: none; /* Safari 3.1+ */
      -moz-user-select: none; /* Firefox 2+ */
      -ms-user-select: none; /* IE 10+ */
      user-select: none;
      font-size:20px;
  }
   
  .box::before
  {
      content:"+";
      color: black;
      display: inline-block;
      margin-right: 6px;
  }
   
  .check-box::before
  {
      content: "-";
  }
   
  .nested
  {
      display: none;
  }
   
  .active
  {
      display: block;
  }
  </style>
  
  </head>
  <body>
  
  <h2>Tree View</h2>

    <ul id="myUL">
        <li><span class="box" id="box1">Beverages</span>
            <ul class="nested" >
                <li><span>Cold beverages</span></li>
                <li><span>Hot Beverages</span></li>
            </ul>
        </li>
        <li><span class="box" id="box2">Tea</span>
            <ul class="nested">
                <li><span>Black Tea</span></li>
                <li><span>White Tea</span></li>
            </ul>
        </li>
        <li><span class="box" id="box3">Green Tea</span>
            <ul class="nested">
                <li><span>Sencha</span></li>
                <li><span>Gyokuro</span></li>
            </ul>
        </li>
    </ul>

  </body>
    `
    
  //Main JS Class holds methods to be called
  class SamplePrepared extends HTMLElement {
    constructor () {

      //call SAC DOM Super method to get shadow DOM information
      super()

      //Get shadow DOM informations
      this._shadowRoot = this.attachShadow({ mode: 'open' })
      this._shadowRoot.appendChild(prepared.content.cloneNode(true))
      
      //Set HTML block in shadow DOM of SAC
      this._root = this._shadowRoot.getElementById('root')
      //_props object is used to hold properties information

      this._shadowRoot.getElementById('box1').addEventListener('click',function () {
        if (this.parentElement.querySelector(".nested") != null) {
            this.parentElement.querySelector(".nested").classList.toggle("active");
            this.classList.toggle("check-box");
        }
      });

      this._shadowRoot.getElementById('box2').addEventListener('click',function () {
        if (this.parentElement.querySelector(".nested") != null) {
            this.parentElement.querySelector(".nested").classList.toggle("active");
            this.classList.toggle("check-box");
        }
      });

      this._shadowRoot.getElementById('box3').addEventListener('click',function () {
        if (this.parentElement.querySelector(".nested") != null) {
            this.parentElement.querySelector(".nested").classList.toggle("active");
            this.classList.toggle("check-box");
        }
      });

      this._props = {}
      
      //Call render() method to plot chart
      this.render(this._resultSet)
    }

    //onCustomWidgetResize() method is execute whenever CW will resized in SAC.
    onCustomWidgetResize (width, height) {
      
      //Call render() method to plot chart
      this.render(this._resultSet)
    }
    
    //render() method to plot chart - resultSet1 holds data from SAC table/chart.
    async render (resultSet1) {
      console.log("Hi");
    }
  
  }
  customElements.define('com-sap-sample-dd-prepared', SamplePrepared)
})()