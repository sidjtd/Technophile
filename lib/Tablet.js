function Tablet (x, y){

    this._touch = function (x, y){
        return {
        'x' : x,
        'y' : y
        };
    };

}

module.exports = Tablet;