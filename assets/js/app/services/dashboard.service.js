define("App.Service.Dashboard", function(module) {

  var BaseService = require("App.Service.Base");
  
  var DashboardService = BaseService.extend({
    getDashboard: function() {
      return "test";
    }
  });

  module.exports = DashboardService;
});