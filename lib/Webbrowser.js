class WebBrowser {
  constructor (){

    this._open = function (url){
      return 'Browsing to ',url;
    };
  }

}

module.exports = NintendoDSWebBrowser;