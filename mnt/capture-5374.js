var casper = require("casper").create({
    logLevel: "debug"
});

casper.on('remote.message', function(message) {
    this.echo(message);
});

casper.userAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9");

// 指定した URL へ遷移する
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
      console.log(index);
      $('#select_area option').val(index).change();
      return $(document.body).text();
    }, areas[i]['area']);

    casper.capture("/mnt/5374_" + i + ".png");

    //this.echo(html);
    //});
    for (var j in areas[i]) {
      this.echo(j + ' ' + areas[i][j]);
    }
  }
});

// ページが読み込まれたときに実行されるコールバック
// casper.then(function() {
  // 画面のキャプチャを suzumekawaii.png というファイルに保存する
//  casper.capture("/mnt/5374.png");
// });

// 処理を開始する
casper.run();
