var WebBrowser = require('./WebBrowser');
var GameConsole = require('./GameConsole');

function NintendoDS(){

    GameConsole.call(this, 'Nintendo DS');
    WebBrowser.call(this);
  }

/*extend(NintendoDS.prototype.GameConsole);
extend(NintendoDS.prototype.WebBrowser);*/

module.exports = NintendoDS;