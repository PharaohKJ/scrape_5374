var casper = require("casper").create();

// 送信する User-Agent ヘッダを普段使っているブラウザに合わせる
// 開発者ツールのコンソールに navigator.userAgent と打ち込むと出る
casper.userAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9");

// 指定した URL へ遷移する
casper.start("http://kanazawa.5374.jp");

// ページが読み込まれたときに実行されるコールバック
casper.then(function() {
	// 画面のキャプチャを suzumekawaii.png というファイルに保存する
	casper.capture("/mnt/5374.png");
});

// 処理を開始する
casper.run();
