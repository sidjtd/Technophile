function Watch(){
    this.bodyPart = null;
    this.wear = function (bodypart) {
      this.bodyPart = bodypart;
    };
}
module.exports = Watch;