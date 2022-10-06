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
var data = [
    {
        "date": "2022-09-29",
        "value": 55
    },
    {
        "date": "2022-09-30",
        "value": 48
    },
    {
        "date": "2022-10-01",
        "value": 43
    },
    {
        "date": "2022-10-02",
        "value": 37
    },
    {
        "date": "2022-10-03",
        "value": 30
    },
    {
        "date": "2022-10-04",
        "value": 34
    },
    {
        "date": "2022-10-05",
        "value": 24
    },
    {
        "date": "2022-10-06",
        "value": 17
    },
    {
        "date": "2022-10-07",
        "value": 15
    },
    {
        "date": "2022-10-08",
        "value": 12
    },
    {
        "date": "2022-10-09",
        "value": 14
    },
    {
        "date": "2022-10-10",
        "value": 12
    },
    {
        "date": "2022-10-11",
        "value": 7
    },
    {
        "date": "2022-10-12",
        "value": 0
    },
    {
        "date": "2022-10-13",
        "value": 8
    },
    {
        "date": "2022-10-14",
        "value": 14
    },
    {
        "date": "2022-10-15",
        "value": 20
    },
    {
        "date": "2022-10-16",
        "value": 21
    },
    {
        "date": "2022-10-17",
        "value": 28
    },
    {
        "date": "2022-10-18",
        "value": 20
    },
    {
        "date": "2022-10-19",
        "value": 29
    },
    {
        "date": "2022-10-20",
        "value": 24
    },
    {
        "date": "2022-10-21",
        "value": 32
    },
    {
        "date": "2022-10-22",
        "value": 23
    },
    {
        "date": "2022-10-23",
        "value": 19
    },
    {
        "date": "2022-10-24",
        "value": 10
    },
    {
        "date": "2022-10-25",
        "value": 3
    },
    {
        "date": "2022-10-26",
        "value": 3
    },
    {
        "date": "2022-10-27",
        "value": 2
    },
    {
        "date": "2022-10-28",
        "value": 5
    },
    {
        "date": "2022-10-29",
        "value": 4
    },
    {
        "date": "2022-10-30",
        "value": 3
    },
    {
        "date": "2022-10-31",
        "value": 6
    },
    {
        "date": "2022-11-01",
        "value": 2
    },
    {
        "date": "2022-11-02",
        "value": 4
    },
    {
        "date": "2022-11-03",
        "value": 2
    },
    {
        "date": "2022-11-04",
        "value": 8
    },
    {
        "date": "2022-11-05",
        "value": 14
    },
    {
        "date": "2022-11-06",
        "value": 7
    },
    {
        "date": "2022-11-07",
        "value": 4
    },
    {
        "date": "2022-11-08",
        "value": 14
    },
    {
        "date": "2022-11-09",
        "value": 7
    },
    {
        "date": "2022-11-10",
        "value": 3
    },
    {
        "date": "2022-11-11",
        "value": 5
    },
    {
        "date": "2022-11-12",
        "value": 1
    },
    {
        "date": "2022-11-13",
        "value": 6
    },
    {
        "date": "2022-11-14",
        "value": 4
    },
    {
        "date": "2022-11-15",
        "value": 13
    },
    {
        "date": "2022-11-16",
        "value": 7
    },
    {
        "date": "2022-11-17",
        "value": 12
    },
    {
        "date": "2022-11-18",
        "value": 21
    },
    {
        "date": "2022-11-19",
        "value": 31
    },
    {
        "date": "2022-11-20",
        "value": 36
    },
    {
        "date": "2022-11-21",
        "value": 32
    },
    {
        "date": "2022-11-22",
        "value": 38
    },
    {
        "date": "2022-11-23",
        "value": 44
    },
    {
        "date": "2022-11-24",
        "value": 52
    },
    {
        "date": "2022-11-25",
        "value": 56
    },
    {
        "date": "2022-11-26",
        "value": 56
    },
    {
        "date": "2022-11-27",
        "value": 58
    },
    {
        "date": "2022-11-28",
        "value": 66
    },
    {
        "date": "2022-11-29",
        "value": 63
    },
    {
        "date": "2022-11-30",
        "value": 71
    },
    {
        "date": "2022-12-01",
        "value": 69
    },
    {
        "date": "2022-12-02",
        "value": 72
    },
    {
        "date": "2022-12-03",
        "value": 80
    },
    {
        "date": "2022-12-04",
        "value": 82
    },
    {
        "date": "2022-12-05",
        "value": 75
    },
    {
        "date": "2022-12-06",
        "value": 76
    },
    {
        "date": "2022-12-07",
        "value": 82
    },
    {
        "date": "2022-12-08",
        "value": 80
    },
    {
        "date": "2022-12-09",
        "value": 82
    },
    {
        "date": "2022-12-10",
        "value": 88
    },
    {
        "date": "2022-12-11",
        "value": 82
    },
    {
        "date": "2022-12-12",
        "value": 89
    },
    {
        "date": "2022-12-13",
        "value": 92
    },
    {
        "date": "2022-12-14",
        "value": 102
    },
    {
        "date": "2022-12-15",
        "value": 104
    },
    {
        "date": "2022-12-16",
        "value": 98
    },
    {
        "date": "2022-12-17",
        "value": 90
    },
    {
        "date": "2022-12-18",
        "value": 81
    },
    {
        "date": "2022-12-19",
        "value": 74
    },
    {
        "date": "2022-12-20",
        "value": 69
    },
    {
        "date": "2022-12-21",
        "value": 71
    },
    {
        "date": "2022-12-22",
        "value": 63
    },
    {
        "date": "2022-12-23",
        "value": 71
    },
    {
        "date": "2022-12-24",
        "value": 66
    },
    {
        "date": "2022-12-25",
        "value": 65
    },
    {
        "date": "2022-12-26",
        "value": 60
    },
    {
        "date": "2022-12-27",
        "value": 59
    },
    {
        "date": "2022-12-28",
        "value": 58
    },
    {
        "date": "2022-12-29",
        "value": 49
    },
    {
        "date": "2022-12-30",
        "value": 45
    },
    {
        "date": "2022-12-31",
        "value": 45
    },
    {
        "date": "2023-01-01",
        "value": 44
    },
    {
        "date": "2023-01-02T18:30:00.000Z",
        "value": 42
    },
    {
        "date": "2023-01-03T18:30:00.000Z",
        "value": 47
    },
    {
        "date": "2023-01-04T18:30:00.000Z",
        "value": 49
    },
    {
        "date": "2023-01-05T18:30:00.000Z",
        "value": 40
    },
    {
        "date": "2023-01-06T18:30:00.000Z",
        "value": 37
    },
    {
        "date": "2023-01-07T18:30:00.000Z",
        "value": 47
    },
    {
        "date": "2023-01-08T18:30:00.000Z",
        "value": 54
    },
    {
        "date": "2023-01-09T18:30:00.000Z",
        "value": 62
    },
    {
        "date": "2023-01-10T18:30:00.000Z",
        "value": 58
    },
    {
        "date": "2023-01-11T18:30:00.000Z",
        "value": 54
    },
    {
        "date": "2023-01-12T18:30:00.000Z",
        "value": 57
    },
    {
        "date": "2023-01-13T18:30:00.000Z",
        "value": 66
    },
    {
        "date": "2023-01-14T18:30:00.000Z",
        "value": 65
    },
    {
        "date": "2023-01-15T18:30:00.000Z",
        "value": 71
    },
    {
        "date": "2023-01-16T18:30:00.000Z",
        "value": 75
    },
    {
        "date": "2023-01-17T18:30:00.000Z",
        "value": 76
    },
    {
        "date": "2023-01-18T18:30:00.000Z",
        "value": 70
    },
    {
        "date": "2023-01-19T18:30:00.000Z",
        "value": 75
    },
    {
        "date": "2023-01-20T18:30:00.000Z",
        "value": 67
    },
    {
        "date": "2023-01-21T18:30:00.000Z",
        "value": 75
    },
    {
        "date": "2023-01-22T18:30:00.000Z",
        "value": 78
    },
    {
        "date": "2023-01-23T18:30:00.000Z",
        "value": 75
    },
    {
        "date": "2023-01-24T18:30:00.000Z",
        "value": 83
    },
    {
        "date": "2023-01-25T18:30:00.000Z",
        "value": 93
    },
    {
        "date": "2023-01-26T18:30:00.000Z",
        "value": 83
    },
    {
        "date": "2023-01-27T18:30:00.000Z",
        "value": 78
    },
    {
        "date": "2023-01-28T18:30:00.000Z",
        "value": 80
    },
    {
        "date": "2023-01-29T18:30:00.000Z",
        "value": 86
    },
    {
        "date": "2023-01-30T18:30:00.000Z",
        "value": 77
    },
    {
        "date": "2023-01-31T18:30:00.000Z",
        "value": 79
    },
    {
        "date": "2023-02-01T18:30:00.000Z",
        "value": 82
    },
    {
        "date": "2023-02-02T18:30:00.000Z",
        "value": 92
    },
    {
        "date": "2023-02-03T18:30:00.000Z",
        "value": 90
    },
    {
        "date": "2023-02-04T18:30:00.000Z",
        "value": 93
    },
    {
        "date": "2023-02-05T18:30:00.000Z",
        "value": 86
    },
    {
        "date": "2023-02-06T18:30:00.000Z",
        "value": 81
    },
    {
        "date": "2023-02-07T18:30:00.000Z",
        "value": 76
    },
    {
        "date": "2023-02-08T18:30:00.000Z",
        "value": 84
    },
    {
        "date": "2023-02-09T18:30:00.000Z",
        "value": 90
    },
    {
        "date": "2023-02-10T18:30:00.000Z",
        "value": 90
    },
    {
        "date": "2023-02-11T18:30:00.000Z",
        "value": 96
    },
    {
        "date": "2023-02-12T18:30:00.000Z",
        "value": 99
    },
    {
        "date": "2023-02-13T18:30:00.000Z",
        "value": 105
    },
    {
        "date": "2023-02-14T18:30:00.000Z",
        "value": 103
    },
    {
        "date": "2023-02-15T18:30:00.000Z",
        "value": 109
    },
    {
        "date": "2023-02-16T18:30:00.000Z",
        "value": 111
    },
    {
        "date": "2023-02-17T18:30:00.000Z",
        "value": 115
    },
    {
        "date": "2023-02-18T18:30:00.000Z",
        "value": 119
    },
    {
        "date": "2023-02-19T18:30:00.000Z",
        "value": 111
    },
    {
        "date": "2023-02-20T18:30:00.000Z",
        "value": 115
    },
    {
        "date": "2023-02-21T18:30:00.000Z",
        "value": 110
    },
    {
        "date": "2023-02-22T18:30:00.000Z",
        "value": 111
    },
    {
        "date": "2023-02-23T18:30:00.000Z",
        "value": 114
    },
    {
        "date": "2023-02-24T18:30:00.000Z",
        "value": 109
    },
    {
        "date": "2023-02-25T18:30:00.000Z",
        "value": 109
    },
    {
        "date": "2023-02-26T18:30:00.000Z",
        "value": 104
    },
    {
        "date": "2023-02-27T18:30:00.000Z",
        "value": 98
    },
    {
        "date": "2023-02-28T18:30:00.000Z",
        "value": 105
    },
    {
        "date": "2023-03-01T18:30:00.000Z",
        "value": 99
    },
    {
        "date": "2023-03-02T18:30:00.000Z",
        "value": 97
    },
    {
        "date": "2023-03-03T18:30:00.000Z",
        "value": 101
    },
    {
        "date": "2023-03-04T18:30:00.000Z",
        "value": 103
    },
    {
        "date": "2023-03-05T18:30:00.000Z",
        "value": 105
    },
    {
        "date": "2023-03-06T18:30:00.000Z",
        "value": 101
    },
    {
        "date": "2023-03-07T18:30:00.000Z",
        "value": 94
    },
    {
        "date": "2023-03-08T18:30:00.000Z",
        "value": 102
    },
    {
        "date": "2023-03-09T18:30:00.000Z",
        "value": 109
    },
    {
        "date": "2023-03-10T18:30:00.000Z",
        "value": 112
    },
    {
        "date": "2023-03-11T18:30:00.000Z",
        "value": 113
    },
    {
        "date": "2023-03-12T18:30:00.000Z",
        "value": 113
    },
    {
        "date": "2023-03-13T18:30:00.000Z",
        "value": 122
    },
    {
        "date": "2023-03-14T18:30:00.000Z",
        "value": 122
    },
    {
        "date": "2023-03-15T18:30:00.000Z",
        "value": 120
    },
    {
        "date": "2023-03-16T18:30:00.000Z",
        "value": 115
    },
    {
        "date": "2023-03-17T18:30:00.000Z",
        "value": 116
    },
    {
        "date": "2023-03-18T18:30:00.000Z",
        "value": 116
    },
    {
        "date": "2023-03-19T18:30:00.000Z",
        "value": 119
    },
    {
        "date": "2023-03-20T18:30:00.000Z",
        "value": 116
    },
    {
        "date": "2023-03-21T18:30:00.000Z",
        "value": 112
    },
    {
        "date": "2023-03-22T18:30:00.000Z",
        "value": 116
    },
    {
        "date": "2023-03-23T18:30:00.000Z",
        "value": 115
    },
    {
        "date": "2023-03-24T18:30:00.000Z",
        "value": 112
    },
    {
        "date": "2023-03-25T18:30:00.000Z",
        "value": 120
    },
    {
        "date": "2023-03-26T18:30:00.000Z",
        "value": 122
    },
    {
        "date": "2023-03-27T18:30:00.000Z",
        "value": 124
    },
    {
        "date": "2023-03-28T18:30:00.000Z",
        "value": 128
    },
    {
        "date": "2023-03-29T18:30:00.000Z",
        "value": 132
    },
    {
        "date": "2023-03-30T18:30:00.000Z",
        "value": 138
    },
    {
        "date": "2023-03-31T18:30:00.000Z",
        "value": 130
    },
    {
        "date": "2023-04-01T18:30:00.000Z",
        "value": 137
    },
    {
        "date": "2023-04-02T18:30:00.000Z",
        "value": 139
    },
    {
        "date": "2023-04-03T18:30:00.000Z",
        "value": 135
    },
    {
        "date": "2023-04-04T18:30:00.000Z",
        "value": 138
    },
    {
        "date": "2023-04-05T18:30:00.000Z",
        "value": 143
    },
    {
        "date": "2023-04-06T18:30:00.000Z",
        "value": 135
    },
    {
        "date": "2023-04-07T18:30:00.000Z",
        "value": 145
    },
    {
        "date": "2023-04-08T18:30:00.000Z",
        "value": 138
    },
    {
        "date": "2023-04-09T18:30:00.000Z",
        "value": 136
    },
    {
        "date": "2023-04-10T18:30:00.000Z",
        "value": 131
    },
    {
        "date": "2023-04-11T18:30:00.000Z",
        "value": 137
    },
    {
        "date": "2023-04-12T18:30:00.000Z",
        "value": 140
    },
    {
        "date": "2023-04-13T18:30:00.000Z",
        "value": 130
    },
    {
        "date": "2023-04-14T18:30:00.000Z",
        "value": 134
    },
    {
        "date": "2023-04-15T18:30:00.000Z",
        "value": 141
    },
    {
        "date": "2023-04-16T18:30:00.000Z",
        "value": 132
    },
    {
        "date": "2023-04-17T18:30:00.000Z",
        "value": 135
    },
    {
        "date": "2023-04-18T18:30:00.000Z",
        "value": 141
    },
    {
        "date": "2023-04-19T18:30:00.000Z",
        "value": 136
    },
    {
        "date": "2023-04-20T18:30:00.000Z",
        "value": 131
    },
    {
        "date": "2023-04-21T18:30:00.000Z",
        "value": 125
    },
    {
        "date": "2023-04-22T18:30:00.000Z",
        "value": 123
    },
    {
        "date": "2023-04-23T18:30:00.000Z",
        "value": 129
    },
    {
        "date": "2023-04-24T18:30:00.000Z",
        "value": 138
    },
    {
        "date": "2023-04-25T18:30:00.000Z",
        "value": 136
    },
    {
        "date": "2023-04-26T18:30:00.000Z",
        "value": 127
    },
    {
        "date": "2023-04-27T18:30:00.000Z",
        "value": 127
    },
    {
        "date": "2023-04-28T18:30:00.000Z",
        "value": 120
    },
    {
        "date": "2023-04-29T18:30:00.000Z",
        "value": 112
    },
    {
        "date": "2023-04-30T18:30:00.000Z",
        "value": 109
    },
    {
        "date": "2023-05-01T18:30:00.000Z",
        "value": 99
    },
    {
        "date": "2023-05-02T18:30:00.000Z",
        "value": 98
    },
    {
        "dateAI": "2023-05-03T18:30:00.000Z",
        "valueAi": 106
    },
    {
        "dateAI": "2023-05-04T18:30:00.000Z",
        "valueAi": 115
    },
    {
        "dateAI": "2023-05-05T18:30:00.000Z",
        "valueAi": 110
    },
    {
        "dateAI": "2023-05-06T18:30:00.000Z",
        "valueAi": 107
    },
    {
        "dateAI": "2023-05-07T18:30:00.000Z",
        "valueAi": 105
    },
    {
        "dateAI": "2023-05-08T18:30:00.000Z",
        "valueAi": 97
    },
    {
        "dateAI": "2023-05-09T18:30:00.000Z",
        "valueAi": 103
    },
    {
        "dateAI": "2023-05-10T18:30:00.000Z",
        "valueAi": 110
    },
    {
        "dateAI": "2023-05-11T18:30:00.000Z",
        "valueAi": 107
    },
    {
        "dateAI": "2023-05-12T18:30:00.000Z",
        "value": 115
    },
    {
        "dateAI": "2023-05-13T18:30:00.000Z",
        "value": 113
    },
    {
        "dateAI": "2023-05-14T18:30:00.000Z",
        "value": 118
    },
    {
        "dateAI": "2023-05-15T18:30:00.000Z",
        "value": 116
    },
    {
        "dateAI": "2023-05-16T18:30:00.000Z",
        "value": 120
    },
    {
        "dateAI": "2023-05-17T18:30:00.000Z",
        "value": 128
    },
    {
        "dateAI": "2023-05-18T18:30:00.000Z",
        "value": 127
    },
    {
        "dateAI": "2023-05-19T18:30:00.000Z",
        "value": 120
    },
    {
        "dateAI": "2023-05-20T18:30:00.000Z",
        "value": 130
    },
    {
        "dateAI": "2023-05-21T18:30:00.000Z",
        "value": 134
    },
    {
        "dateAI": "2023-05-22T18:30:00.000Z",
        "valueAi": 133
    },
    {
        "dateAI": "2023-05-23T18:30:00.000Z",
        "valueAi": 126
    },
    {
        "dateAI": "2023-05-24T18:30:00.000Z",
        "valueAi": 136
    },
    {
        "dateAI": "2023-05-25T18:30:00.000Z",
        "valueAi": 139
    },
    {
        "dateAI": "2023-05-26T18:30:00.000Z",
        "valueAi": 146
    },
    {
        "dateAI": "2023-05-27T18:30:00.000Z",
        "valueAi": 137
    },
    {
        "dateAI": "2023-05-28T18:30:00.000Z",
        "valueAi": 127
    },
    {
        "dateAI": "2023-05-29T18:30:00.000Z",
        "valueAi": 120
    },
    {
        "dateAI": "2023-05-30T18:30:00.000Z",
        "valueAi": 117
    },
    {
        "dateAI": "2023-05-31T18:30:00.000Z",
        "valueAi": 124
    },
    {
        "dateAI": "2023-06-01T18:30:00.000Z",
        "valueAi": 127
    },
    {
        "dateAI": "2023-06-02T18:30:00.000Z",
        "valueAi": 136
    },
    {
        "dateAI": "2023-06-03T18:30:00.000Z",
        "valueAi": 144
    },
    {
        "dateAI": "2023-06-04T18:30:00.000Z",
        "valueAi": 146
    },
    {
        "dateAI": "2023-06-05T18:30:00.000Z",
        "valueAi": 141
    },
    {
        "dateAI": "2023-06-06T18:30:00.000Z",
        "valueAi": 144
    },
    {
        "dateAI": "2023-06-07T18:30:00.000Z",
        "valueAi": 138
    },
    {
        "dateAI": "2023-06-08T18:30:00.000Z",
        "valueAi": 130
    },
    {
        "dateAI": "2023-06-09T18:30:00.000Z",
        "valueAi": 133
    },
    {
        "dateAI": "2023-06-10T18:30:00.000Z",
        "valueAi": 128
    },
    {
        "dateAI": "2023-06-11T18:30:00.000Z",
        "valueAi": 126
    },
    {
        "dateAI": "2023-06-12T18:30:00.000Z",
        "valueAi": 127
    },
    {
        "dateAI": "2023-06-13T18:30:00.000Z",
        "valueAi": 128
    },
    {
        "dateAI": "2023-06-14T18:30:00.000Z",
        "valueAi": 119
    },
    {
        "dateAI": "2023-06-15T18:30:00.000Z",
        "valueAi": 122
    },
    {
        "dateAI": "2023-06-16T18:30:00.000Z",
        "valueAi": 114
    },
    {
        "dateAI": "2023-06-17T18:30:00.000Z",
        "valueAi": 115
    },
    {
        "dateAI": "2023-06-18T18:30:00.000Z",
        "valueAi": 121
    },
    {
        "dateAI": "2023-06-19T18:30:00.000Z",
        "valueAi": 126
    },
    {
        "dateAI": "2023-06-20T18:30:00.000Z",
        "valueAi": 128
    },
    {
        "dateAI": "2023-06-21T18:30:00.000Z",
        "valueAi": 129
    },
    {
        "dateAI": "2023-06-22T18:30:00.000Z",
        "valueAi": 130
    },
    {
        "dateAI": "2023-06-23T18:30:00.000Z",
        "valueAi": 131
    },
    {
        "dateAI": "2023-06-24T18:30:00.000Z",
        "valueAi": 138
    },
    {
        "dateAI": "2023-06-25T18:30:00.000Z",
        "valueAi": 135
    },
    {
        "dateAI": "2023-06-26T18:30:00.000Z",
        "valueAi": 130
    },
    {
        "dateAI": "2023-06-27T18:30:00.000Z",
        "valueAi": 127
    },
    {
        "dateAI": "2023-06-28T18:30:00.000Z",
        "valueAi": 119
    },
    {
        "dateAI": "2023-06-29T18:30:00.000Z",
        "valueAi": 117
    },
    {
        "dateAI": "2023-06-30T18:30:00.000Z",
        "valueAi": 123
    },
    {
        "dateAI": "2023-07-01T18:30:00.000Z",
        "valueAi": 116
    },
    {
        "dateAI": "2023-07-02T18:30:00.000Z",
        "valueAi": 106
    },
    {
        "dateAI": "2023-07-03T18:30:00.000Z",
        "valueAi": 104
    },
    {
        "dateAI": "2023-07-04T18:30:00.000Z",
        "valueAi": 112
    },
    {
        "dateAI": "2023-07-05T18:30:00.000Z",
        "valueAi": 110
    },
    {
        "dateAI": "2023-07-06T18:30:00.000Z",
        "valueAi": 113
    },
    {
        "dateAI": "2023-07-07T18:30:00.000Z",
        "valueAi": 113
    },
    {
        "dateAI": "2023-07-08T18:30:00.000Z",
        "valueAi": 120
    },
    {
        "dateAI": "2023-07-09T18:30:00.000Z",
        "valueAi": 114
    },
    {
        "dateAI": "2023-07-10T18:30:00.000Z",
        "valueAi": 118
    },
    {
        "dateAI": "2023-07-11T18:30:00.000Z",
        "valueAi": 118
    },
    {
        "dateAI": "2023-07-12T18:30:00.000Z",
        "valueAi": 114
    },
    {
        "dateAI": "2023-07-13T18:30:00.000Z",
        "valueAi": 109
    },
    {
        "dateAI": "2023-07-14T18:30:00.000Z",
        "valueAi": 117
    },
    {
        "dateAI": "2023-07-15T18:30:00.000Z",
        "valueAi": 115
    },
    {
        "dateAI": "2023-07-16T18:30:00.000Z",
        "valueAi": 120
    },
    {
        "dateAI": "2023-07-17T18:30:00.000Z",
        "valueAi": 130
    },
    {
        "dateAI": "2023-07-18T18:30:00.000Z",
        "valueAi": 139
    },
    {
        "dateAI": "2023-07-19T18:30:00.000Z",
        "valueAi": 141
    },
    {
        "dateAI": "2023-07-20T18:30:00.000Z",
        "valueAi": 132
    },
    {
        "dateAI": "2023-07-21T18:30:00.000Z",
        "valueAi": 127
    },
    {
        "dateAI": "2023-07-22T18:30:00.000Z",
        "valueAi": 129
    },
    {
        "dateAI": "2023-07-23T18:30:00.000Z",
        "valueAi": 123
    },
    {
        "dateAI": "2023-07-24T18:30:00.000Z",
        "valueAi": 131
    },
    {
        "dateAI": "2023-07-25T18:30:00.000Z",
        "valueAi": 129
    }
]

chart.data = data;
// Create axes

var dateAxistwo = chart.xAxes.push(new am4charts.DateAxis());
dateAxistwo.renderer.minGridDistance = 50;
dateAxistwo.renderer.grid.template.disabled = true;
dateAxistwo.cursorTooltipEnabled = false;
dateAxistwo.dateFormatter.dateFormat = "[bold]yyyy[/]";
dateAxistwo.baseInterval = {
"timeUnit":"year",
"count":1
}


var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
dateAxis.renderer.minGridDistance = 50;
dateAxis.renderer.grid.template.disabled = true;
dateAxis.cursorTooltipEnabled = false;
dateAxis.periodChangeDateFormats.setKey("month","MMM");
dateAxis.dateFormatter.dateFormat = "MMM yyyy";
/* dateAxistwo.periodChangeDateFormats.setKey("yyyy"); */


var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.grid.template.disabled = true;
valueAxis.cursorTooltipEnabled = false;


// Create series
var series = chart.series.push(new am4charts.LineSeries());
series.dataFields.valueY = "value";
series.dataFields.dateX = "date";
series.strokeWidth = 1;
/* series.stroke = am4core.color("#C4A484"); */

series.xAxis = dateAxis;

series.tooltipText = "{date} : {value}"

var series1 = chart.series.push(new am4charts.LineSeries());
series1.dataFields.valueY = "valueAi";
series1.dataFields.dateX = "dateAI";
series1.strokeWidth = 1;
series1.xAxis = dateAxis;
series1.stroke = am4core.color("#C4A484");
series1.fill = am4core.color("#C4A484");
series1.tooltipText = "{dateAI} : {valueAi}"


var Dummy = chart.series.push(new am4charts.LineSeries());
Dummy.dataFields.valueY = "valueAi";
Dummy.dataFields.dateX = "dateAI";
Dummy.stroke = am4core.color("#ffffff");
Dummy.fill = am4core.color("#ffffff");
Dummy.xAxis = dateAxistwo;


series.tooltip.pointerOrientation = "vertical";

var range = dateAxis.axisRanges.create();
range.date = new Date("2023-05-02T18:30:00.000Z");
range.grid.stroke = am4core.color("black");
range.grid.strokeWidth = 1.5;
range.grid.strokeOpacity = 1;


chart.cursor = new am4charts.XYCursor();
/* chart.cursor.snapToSeries = series; */
chart.cursor.xAxis = dateAxis;
chart.cursor.lineX.disabled = true;
chart.cursor.lineY.disabled = true;
/* 
var scrollbarX = new am4charts.XYChartScrollbar();
scrollbarX.series.push(series);
chart.scrollbarX = scrollbarX; */


    }
  }
  customElements.define('com-sap-sample-lineareamodify-prepared', SamplePrepared)
})()