var Phone = require('./Phone');
var Tablet = require('./Tablet');
var GameConsole = require('./GameConsole');
var WebBrowser = require('./WebBrowser');

// function extend (dest, source){
//  for (var k in source){
//     if(source.hasOwnProperty(k)){
//       dest[k] = source[k];
//     }
//     return dest;
//  }
// }

function SmartPhone(phoneNumber){

    Phone.call(this, phoneNumber);
    Tablet.call(this);
    GameConsole.call(this, 'Smart Phone');
    WebBrowser.call(this);
  }

// extend(Smartphone.prototype, Phone);
// extend(Smartphone.prototype, GameConsole);
/*extend(Smartphone.prototype, WebBrowser);
extend(Smartphone.prototype, Tablet);
*/

module.exports = SmartPhone;