'use strict'

class Watch {
  constructor (){
    this._bodyPart = null;
    this._wear = function (bodypart) {
      this.bodypart = bodypart;
    };

  }
}

export default Watch;