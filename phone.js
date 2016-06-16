'use strict';

class Phone {
  constructor (phoneNumber){
    this._phoneNumber = phoneNumber;
    this._callPhone = function (phoneNumber){
      return this.phoneNumber,'calls',phoneNumber;
    };
  }
}

export default Phone;