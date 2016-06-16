var Phone = require('./Phone');
var Tablet = require('./Tablet');
var GameConsole = require('./GameConsole');
var WebBrowser = require('./WebBrowser');

function SmartPhone(){

    Phone.call(this, Phone);
    Tablet.call(this, Tablet);
    GameConsole.call(this, GameConsole);
    WebBrowser.call(this, WebBrowser);
  }

/*extend(Smartphone.prototype, GameConsole);
extend(Smartphone.prototype, WebBrowser);
extend(Smartphone.prototype, Tablet);
extend(Smartphone.prototype, Phone);*/

module.exports = SmartPhone;