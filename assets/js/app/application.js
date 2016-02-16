define("App", function(module){
  window.App = new Marionette.Application();

  var Router = require("App.Router");
  var RootLayout = require("App.Views.Layouts.Index");
  var MainModule = require("App.Module.Main");
        
  App.addInitializer(function(options){
    window.ASSETS_PATH = options.assets_path;
    window.API_URL = options.api;

    console.log(options);
  });

  App.layout = new RootLayout();
  
  App.on("start", function(){

    console.log("started!");

    // Init main module

    var router = new Router();

    App.mainModule = new MainModule({
      layout: App.layout,
      vent: App.vent,
      router: router
    });

    // Start Backbone history - necessary for bookmarkable URLs
    Backbone.history.start();
  });

  module.exports = App;
});