var casper = require("casper").create({
  logLevel: "debug"
});

casper.on('remote.message', function(message) {
  this.echo(message);
});

casper.userAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9");

var fs = require('fs');

// var areas = {};

casper.start("http://kanazawa.5374.jp", function () {
  this.evaluate(function sendLog(log) {}, this.result.log);

  // Get Area Size
  var areas = this.evaluate(function() {
    var area = [];
    $('#select_area option').each(function() {
      area.push({
        text: $(this).text(),
        area: $(this).attr("value")
      });
    });
    return area;
  });

  for(var i = 0; i < areas.length; i++) {
    areas[i]['html'] = this.evaluate(function(index) {
      //console.log(index);
      $('#select_area option').val(index).change();
      var out = [];
      $('.accordion-toggle').each( function(){
        // console.log($(this).html());
        out.push($(this).html());
      });
      return out;
    }, areas[i]['area']);
    casper.capture("/mnt/data/5374_" + i + "_1.png");
    casper.capture("/mnt/data/5374_" + i + "_2.png");
    casper.capture("/mnt/data/5374_" + i + "_3.png");
  }

  for(var area_index = 0 ; area_index < areas.length; area_index++) {
    for(var div_index = 0; div_index < areas[area_index]['area'].length; div_index++) {
      var t = areas[area_index];
      this.echo(t['text'] + ' : ' + t['area']);
      this.echo(areas[area_index]['html'][div_index]);
    }
  }
  fs.write('/mnt/data/save.json', JSON.stringify(areas, null, '  '), 'w');
});

// 処理を開始する
casper.run();
