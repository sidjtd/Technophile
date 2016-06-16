'strict use';

class WebBrowser {
  constructor (){

    this._open = function (url){
      return 'Browsing to ',url;
    };
  }

}