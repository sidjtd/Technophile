var Phone = require('./Phone');
var Tablet = require('./Tablet');
var GameConsole = require('./GameConsole');
var WebBrowser = require('./WebBrowser');

function SmartWatch (){

    Phone.call(this, Phone);
    Tablet.call(this, Tablet);
    GameConsole.call(this, GameConsole);
    WebBrowser.call(this, WebBrowser);

  }

module.exports = SmartWatch;