'use strict'

class Tablet {
  constructor (x, y){

    this._touch = function (x, y){

        return {

        x : x,
        y : y

        };
    };
  }
}

export default Tablet;