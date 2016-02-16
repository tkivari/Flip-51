define("App.Module.Main", function(module) {

  var DashboardController = require("App.Controller.Dashboard");

  var MainModule = Marionette.Object.extend({
    initialize: function(options){
      // this.repo = require("App.Repository.Default");
      this.vent = options.vent;
      this.router = options.router;
      this.layout = options.layout;

      // Init controllers

      this.initializeControllers();      
      
    },

    initializeControllers: function() {
      this.dashboardController = new DashboardController({
        layout: this.layout,
        vent: this.vent,
        router: this.router
      });
    }

    
  });

  module.exports = MainModule;
});