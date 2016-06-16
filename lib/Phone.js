function Phone(phoneNumber){

    this._phoneNumber = phoneNumber;
    this._callPhone = function (phoneNumber){
      return this.phoneNumber,'calls',phoneNumber;
    };
  }

module.exports = Phone;