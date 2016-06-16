var Watch = require('./Watch');
var Tablet = require('./Tablet');

function SmartWatch(){

    Watch.call(this, Watch);
    Tablet.call(this, Tablet);
  }

module.exports = SmartWatch;