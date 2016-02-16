define("App.Router", function(module){
  module.exports = Backbone.Router.extend({
    routes: {
      "": "showDashboard"
      //"dashboard": "getDashboard"
    }
  });
});