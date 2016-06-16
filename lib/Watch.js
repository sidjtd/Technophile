function Watch (){
    this._bodyPart = null;
    this._wear = function (bodypart) {
      this.bodypart = bodypart;
    };
}

module.exports = Watch;