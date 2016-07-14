$(document).ready(function() {
  $( function() {
    $( document ).tooltip();
  } );

  function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  function addCommas(nStr) {
      nStr += '';
      x = nStr.split('.');
      x1 = x[0];
      x2 = x.length > 1 ? '.' + x[1] : '';
      var rgx = /(\d+)(\d{3})/;
      while (rgx.test(x1)) {
          x1 = x1.replace(rgx, '$1' + ',' + '$2');
      }
      return x1 + x2;
  }

  var labelArray = ["BLACK", "HISPANIC", "WHITE"];

  Chart.defaults.global.tooltipTemplate = "<%= addCommas(value) %>";
  Chart.defaults.global.scaleLabel = "<%= addCommas(value) %>";
  Chart.defaults.global.title.mode = 'label';

  var chart1 = $("#chart1");
  var chart1 = new Chart(chart1, {
      type: 'bar'
      , data: {
          labels: labelArray,
          datasets: [{
              label: "PERCENT NONATTACKING OF ALL SUSPECTS KILLED"
              , yAxisID: 'y-axis-right'
              , type: "line"
              , fill: false
              , lineTension: 0.2
              , data: [44.4, 52.4, 36.3]
              , backgroundColor: 'rgba(33, 111, 222, 0.2)'
              , borderColor: 'rgba(33, 111, 222, 1)'
              , borderWidth: 1
              , pointBorderColor: 'rgba(33, 111, 222, 0.5)'
              , pointBorderWidth: 1
          },{
              label: "ALL NONATTACKING SUSPECTS KILLED"
              , yAxisID: 'y-axis-left'
              , fill: false
              , data: [124, 103, 215]
              , backgroundColor: 'rgba(0, 0, 204, 0.2)'
              , borderColor: 'rgba(0, 0, 204, 1)'
              , borderWidth: 1
              , pointBorderColor: 'rgba(0, 0, 0, 0)'
              , pointBorderWidth: 0
          },{
              label: "ALL SUSPECTS KILLED"
              , yAxisID: 'y-axis-left'
              , fill: false
              , data: [381, 252, 732]
              , backgroundColor: 'rgba(0, 0, 0, 0.2)'
              , borderColor: 'rgba(0, 0, 0, 0.6)'
              , borderWidth: 1
              , pointBorderColor: 'rgba(0, 0, 0, 0)'
              , pointBorderWidth: 0
          }]
      }
      , options: {
          scales: {
              // xAxes: [{
              //     gridLines: {
              //         display: false
              //     }
              // }],
              yAxes: [
                {
                  type: 'linear'
                  , 'id': 'y-axis-left'
                  , display: true
                  , position: 'left'
                  , gridLines: {
                    color: "rgba(0, 0, 0, 0)"
                  }
                  // , scaleLabel: {
                  //   display: true
                  //   , labelString: 'test'
                  // }
                  , ticks: {
                      callback: function(value, index, values) {
                          return addCommas(value);
                      }
                      , min: 0
                      , max: 700
                  }
                },{
                  type: 'linear'
                  , 'id': 'y-axis-right'
                  , display: true
                  , position: 'right'
                  , ticks: {
                      callback: function(value, index, values) {
                          return Math.round(value) + "%";
                      }
                      , min: 30
                      , max: 60
                  }
                }
              ]
          }
          , hover: 'dataset'
          , maintainAspectRatio: false
          , legend: {
            display: false
          }
      }
  });

  var chart2 = $("#chart2");
  var chart2 = new Chart(chart2, {
      type: 'bar'
      , data: {
          labels: labelArray,
          datasets: [{
              label: "PERCENT UNARMED AND NONATTACKING OF ALL SUSPECTS KILLED"
              , yAxisID: 'y-axis-right'
              , type: "line"
              , fill: false
              , lineTension: 0.2
              , data: [11.8, 11.5, 7.0]
              , backgroundColor: 'rgba(255, 102, 102, 0.2)'
              , borderColor: 'rgba(255, 102, 102, 1)'
              , borderWidth: 1
              , pointBorderColor: 'rgba(204, 0, 153, 0.5)'
              , pointBorderWidth: 1
          },{
              label: "UNARMED AND NONATTACKING SUSPECTS KILLED"
              , yAxisID: 'y-axis-left'
              , fill: false
              , data: [45, 29, 51]
              , backgroundColor: 'rgba(100, 0, 0, 0.2)'
              , borderColor: 'rgba(100, 0, 0, 1)'
              , borderWidth: 1
              , pointBorderColor: 'rgba(0, 0, 0, 0)'
              , pointBorderWidth: 0
          },{
              label: "ALL SUSPECTS KILLED"
              , yAxisID: 'y-axis-left'
              , fill: false
              , data: [381, 252, 732]
              , backgroundColor: 'rgba(0, 0, 0, 0.2)'
              , borderColor: 'rgba(0, 0, 0, 0.6)'
              , borderWidth: 1
              , pointBorderColor: 'rgba(0, 0, 0, 0)'
              , pointBorderWidth: 0
          }]
      }
      , options: {
          scales: {
              yAxes: [
                {
                  type: 'linear'
                  , 'id': 'y-axis-left'
                  , display: true
                  , position: 'left'
                  , gridLines: {
                    color: "rgba(0, 0, 0, 0)"
                  }
                  , ticks: {
                      callback: function(value, index, values) {
                          return addCommas(value);
                      }
                      , min: 0
                      , max: 700
                  }
                },{
                  type: 'linear'
                  , 'id': 'y-axis-right'
                  , display: true
                  , position: 'right'
                  , ticks: {
                      callback: function(value, index, values) {
                          return Math.round(value) + "%";
                      }
                      , min: 6
                      , max: 14
                  }
                }
              ]
          }
          , hover: 'dataset'
          , maintainAspectRatio: false
          , legend: {
            display: false
          }
      }
  });

  var chart3 = $("#chart3");
  var chart3 = new Chart(chart3, {
      type: 'bar'
      , data: {
          labels: labelArray,
          datasets: [{
              label: "PERCENT UNARMED OF ALL NONATTACKING SUSPECTS KILLED"
              , yAxisID: 'y-axis-right'
              , type: "line"
              , fill: false
              , lineTension: 0.2
              , data: [36.3, 28.2, 23.7]
              , backgroundColor: 'rgba(77, 0, 153, 0.2)'
              , borderColor: 'rgba(77, 0, 153, 1)'
              , borderWidth: 1
              , pointBorderColor: 'rgba(77, 0, 153, 0.5)'
              , pointBorderWidth: 1
          },{
              label: "UNARMED AND NONATTACKING SUSPECTS KILLED"
              , yAxisID: 'y-axis-left'
              , fill: false
              , data: [45, 29, 51]
              , backgroundColor: 'rgba(38, 38, 38, 0.2)'
              , borderColor: 'rgba(38, 38, 38, 1)'
              , borderWidth: 1
              , pointBorderColor: 'rgba(0, 0, 0, 0)'
              , pointBorderWidth: 0
          },{
              label: "ALL NONATTACKING SUSPECTS KILLED"
              , yAxisID: 'y-axis-left'
              , fill: false
              , data: [124, 103, 215]
              , backgroundColor: 'rgba(0, 0, 204, 0.2)'
              , borderColor: 'rgba(0, 0, 204, 0.6)'
              , borderWidth: 1
              , pointBorderColor: 'rgba(0, 0, 0, 0)'
              , pointBorderWidth: 0
          }]
      }
      , options: {
          scales: {
              yAxes: [
                {
                  type: 'linear'
                  , 'id': 'y-axis-left'
                  , display: true
                  , position: 'left'
                  , gridLines: {
                    color: "rgba(0, 0, 0, 0)"
                  }
                  , ticks: {
                      callback: function(value, index, values) {
                          return addCommas(value);
                      }
                      , min: 0
                      , max: 200
                  }
                },{
                  type: 'linear'
                  , 'id': 'y-axis-right'
                  , display: true
                  , position: 'right'
                  , ticks: {
                      callback: function(value, index, values) {
                          return Math.round(value) + "%";
                      }
                      , min: 20
                      , max: 40
                  }
                }
              ]
          }
          , hover: 'dataset'
          , maintainAspectRatio: false
          , legend: {
            display: false
          }
      }
  });

  if ($('body').width() < 1000) {
    $("#chart1_container").css({'display':'none'});
    $("#chart2_container").css({'display':'none'});
    $("#chart3_container").css({'display':'none'});
  }

  var chartWidth = '500px';
  var chartMarginLeft = '-250px';
  var chartLeft = '50%';
  var textTitleTop = '50px';
  if ($('body').width() < 500) {
    chartWidth = '80%';
    chartMarginLeft = '0px';
    chartLeft = '10%';
    textTitleTop = '0px';
    $("#text_title").css({'top': textTitleTop});
    $("#text_title_text").css({'font-size': '30px'});
    $(".text_normal").css({'width':'75%'});
    $("#author").css({'margin-top':'50px'});
    $("#link_box").css({'display':'none'});
  }

  $("#link_box").mouseenter(function() {
    $("#link_box").animate({
      left: "0px"
    }, 300, function() {
      // Animation complete.
    });
  });
  $("#link_box").mouseleave(function() {
    $("#link_box").animate({
      left: "-190px"
    }, 300, function() {
      // Animation complete.
    });
  });
  $("#link_box_image").click(function() {
    window.location.href = "http://motifable.com";
  });

  $(window).scroll(function() {
    console.log("SCROLLING: " + document.body.scrollTop);
    if (document.body.scrollTop > 50) {
      $("#text_title").css({
        'top': 0,
  			'position': 'fixed'
  		});
      // $("#picture_box").stop().animate({
      //     marginTop: $(window).scrollTop() - $("#picture_box").offset().top + 20
      // });
      // $("#picture_box").css({
      //   'top': -5,
      //   'right': -75,
  		// 	'position': 'fixed',
      //   'transform': 'scale(.5)',
      //   '-webkit-box-shadow': '0px 0px 4px #888',
      // 	'-moz-box-shadow': '0px 0px 4px #888',
      // 	'box-shadow': '0px 0px 4px #888'
  		// });
    } else {
      $("#text_title").css({
        'top': textTitleTop,
        'position': 'absolute'
  		});
      $("#picture_box").css({
        'top': 120,
        'right': '20%',
  			'position': 'absolute',
        'transform': 'scale(1)',
        '-webkit-box-shadow': '0px 0px 0px #888',
      	'-moz-box-shadow': '0px 0px 0px #888',
      	'box-shadow': '0px 0px 0px #888'
  		});
    }
    if (document.body.scrollTop > 1600 && document.body.scrollTop < 2800) {
      chart1.options.legend.display = true;
      $("#chart1_container_placeholder").css({'display':'none'});
      $("#chart1_container").css({
        'display':'block',
        'position': 'relative',
        'top': '0',
        'margin-top': '50px',
        'left': chartLeft,
        'margin-left': chartMarginLeft,
        'width': chartWidth,
        'height': '500px',
        '-webkit-box-shadow': '0px 0px 0px #888',
      	'-moz-box-shadow': '0px 0px 0px #888',
      	'box-shadow': '0px 0px 0px #888'
  		});
    } else {
      if ($('body').width() > 600) {
        chart1.options.legend.display = false;
        $("#chart1_container_placeholder").css({'display':'block'});
        $("#chart1_container").css({
          'position': 'fixed',
          'top': '140px',
          'margin-top': '0px',
          'right': '0',
          'left':'',
          'margin-left': '-250px',
          'width': '200px',
          'height': '150px',
          '-webkit-box-shadow': '0px 0px 4px #888',
        	'-moz-box-shadow': '0px 0px 4px #888',
        	'box-shadow': '0px 0px 4px #888'
    		});
      }
    }
    if (document.body.scrollTop > 2300 && document.body.scrollTop < 3500) {
      chart2.options.legend.display = true;
      $("#chart2_container_placeholder").css({'display':'none'});
      $("#chart2_container").css({
        'display':'block',
        'position': 'relative',
        'top': '0',
        'margin-top': '50px',
        'left': chartLeft,
        'margin-left': chartMarginLeft,
        'width': chartWidth,
        'height': '500px',
        '-webkit-box-shadow': '0px 0px 0px #888',
      	'-moz-box-shadow': '0px 0px 0px #888',
      	'box-shadow': '0px 0px 0px #888'
  		});
    } else {
      if ($('body').width() > 600) {
        chart2.options.legend.display = false;
        $("#chart2_container_placeholder").css({'display':'block'});
        $("#chart2_container").css({
          'position': 'fixed',
          'top': '310px',
          'margin-top': '0px',
          'right': '0',
          'left':'',
          'margin-left': '-250px',
          'width': '200px',
          'height': '150px',
          '-webkit-box-shadow': '0px 0px 4px #888',
        	'-moz-box-shadow': '0px 0px 4px #888',
        	'box-shadow': '0px 0px 4px #888'
    		});
      }
    }
    if (document.body.scrollTop > 2900 && document.body.scrollTop < 4100) {
      chart3.options.legend.display = true;
      $("#chart3_container_placeholder").css({'display':'none'});
      $("#chart3_container").css({
        'display':'block',
        'position': 'relative',
        'top': '0',
        'margin-top': '50px',
        'left': chartLeft,
        'margin-left': chartMarginLeft,
        'width': chartWidth,
        'height': '500px',
        '-webkit-box-shadow': '0px 0px 0px #888',
      	'-moz-box-shadow': '0px 0px 0px #888',
      	'box-shadow': '0px 0px 0px #888'
  		});
    } else {
      if ($('body').width() > 600) {
        chart3.options.legend.display = false;
        $("#chart3_container_placeholder").css({'display':'block'});
        $("#chart3_container").css({
          'position': 'fixed',
          'top': '480px',
          'margin-top': '0px',
          'right': '0',
          'left':'',
          'margin-left': '-250px',
          'width': '200px',
          'height': '150px',
          '-webkit-box-shadow': '0px 0px 4px #888',
        	'-moz-box-shadow': '0px 0px 4px #888',
        	'box-shadow': '0px 0px 4px #888'
    		});
      }
    }
  });

});
