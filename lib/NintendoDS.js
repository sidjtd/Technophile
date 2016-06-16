var WebBrowser = require('./WebBrowser');
var GameConsole = require('./GameConsole');

function NintendoDS (NintendoDS){

    GameConsole.call(this, NintendoDS);
    WebBrowser.call(this, WebBrowser);
  }

module.exports = NintendoDS;