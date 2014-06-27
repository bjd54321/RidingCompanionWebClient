
$(document).ready(function(){
  // check JS support
  $('html').removeClass('no-js');
});

var Widget = (function() {
  $(document).ready(function(){
  	$("#chart").highcharts({
            title: {
                text: 'Monthly Average Temperature',
                x: -20 //center
            },
            subtitle: {
                text: 'Source: WorldClimate.com',
                x: -20
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                title: {
                    text: 'Temperature (°C)'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: '°C'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                name: 'Tokyo',
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
            }, {
                name: 'New York',
                data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
            }, {
                name: 'London',
                data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
            }]
        });
	$("#bpm").highcharts({
	            chart: {
	                zoomType: 'x'
	            },
	            title: {
	                text: 'BPM'
	            },
	            subtitle: {
	                text: document.ontouchstart === undefined ?
	                    'Click and drag in the plot area to zoom in' :
	                    'Pinch the chart to zoom in'
	            },
	            xAxis: {
	                type: 'datetime',
	            },
	            yAxis: {
	                title: {
	                    text: 'BPM'
	                }
	            },
	            legend: {
	                enabled: false
	            },
	            plotOptions: {
	                area: {
	                    marker: {
	                        radius: 2
	                    },
	                    lineWidth: 1,
	                    states: {
	                        hover: {
	                            lineWidth: 1
	                        }
	                    },
	                    threshold: null,
	                    stacking: "normal"
	                }
	            },
	    
	            series: [
	                {
	                    type: 'area',
	                    name: 'Instructor BPM',
	                    pointInterval: 24 * 3600 * 1000,
	                    pointStart: Date.UTC(2006, 0, 01),
	                    stack: 0,
	                    id: 'ibpm',
	                    fillColor: {
	                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
	                        stops: [
	                            [0, Highcharts.getOptions().colors[0]],
	                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
	                        ]
	                    },                    
	                    data: [
	                        0.7731, 0.7779, 0.7844, 0.7866, 0.7864, 0.7788, 0.7875, 0.7971, 0.8004, 0.7857,
	                        0.7932, 0.7938, 0.7927, 0.7918, 0.7919, 0.7989, 0.7988, 0.7949, 0.7948, 0.7882,
	                        0.7745, 0.771, 0.775, 0.7791, 0.7882, 0.7882, 0.7899, 0.7905, 0.7889, 0.7879,
	                        0.7855, 0.7866, 0.7865, 0.7795, 0.7758, 0.7717, 0.761, 0.7497, 0.7471, 0.7473,
	                        0.7407, 0.7288, 0.7074, 0.6927, 0.7083, 0.7191, 0.719, 0.7153, 0.7156, 0.7158,
	                        0.714, 0.7119, 0.7129, 0.7129, 0.7049, 0.7095,
	                         0.714, 0.7119, 0.7129, 0.7129, 0.7049, 0.7095,
	                          0.714, 0.7119, 0.7129, 0.7129, 0.7049, 0.7095, 0.7049, 0.7095,
	                    ]
	                },
	                {
	                    type: 'area',
	                    name: 'Patients BPM',
	                    pointInterval: 24 * 3600 * 1000,
	                    pointStart: Date.UTC(2006, 0, 01),
	                    stack: 1,
	                    id: 'pbpm',
	                    fillColor: {
	                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
	                        stops: [
	                            [0, Highcharts.getOptions().colors[3]],
	                            [1, Highcharts.Color(Highcharts.getOptions().colors[3]).setOpacity(0).get('rgba')]
	                        ]
	                    },                                        data: [
	                       0.6802, 0.678, 0.6796, 0.6817, 0.6817, 0.6832, 0.6877, 0.6912, 0.6914, 0.7009,
	                        0.7012, 0.701, 0.7005, 0.7076, 0.7087, 0.717, 0.7105, 0.7031, 0.7029, 0.7006,
	                        0.7035, 0.7045, 0.6956, 0.6988, 0.6915, 0.6914, 0.6859, 0.6778, 0.6815, 0.6815,
	                        0.6843, 0.6846, 0.6846, 0.6923, 0.6997, 0.7098, 0.7188, 0.7232, 0.7262, 0.7266,
	                        0.7359, 0.7368, 0.7337, 0.7317, 0.7387, 0.7467, 0.7461, 0.7366, 0.7319, 0.7361,
	                        0.7437, 0.7432, 0.7461, 0.7461, 0.7454, 0.7549, 0.7742, 0.7801, 0.7903, 0.7876,
	                        0.7928, 0.7991, 0.8007, 0.7823, 0.7661, 0.785, 0.7863, 0.7862, 0.7821, 0.7858,
	                    ]            
	                }
	            ]
	        });
	  });
}());

var bpmWidgetData = {
	numOfSeconds: 3600,
	data: [
		{
			targetBpm: 128,
			measuredBpm: 110,
			secSinceStart: 5
		},
		{
			targetBpm: 125,
			measuredBpm: 125,
			secSinceStart: 12
		},
		{
			targetBpm: 125,
			measuredBpm: 130,
			secSinceStart: 15
		}	
	]
}