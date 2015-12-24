var casper = require('casper').create();

casper.start('https://www.google.com/', function() {
    this.echo(this.getTitle());
});

casper.run();
