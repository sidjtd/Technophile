'use strict';

class Phone {
  constructor (phoneNumber){
    this._phoneNumber = phoneNumber;
    this._callPhone = function (phoneNumber){
      return phoneNumber calls phoneNumber;
    };
  }
}

export default Phone;