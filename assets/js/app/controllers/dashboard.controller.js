define("App.Controller.Dashboard", function(module) {

    var DashboardService = require("App.Service.Dashboard");
    var FlippService = require("App.Service.Flipp");
    var Checkout51Service = require("App.Service.Checkout51");
    var DealFinderLayoutView = require("App.Views.DealFinderLayout");



    var DashboardController = Marionette.Object.extend({
        initialize: function(options){
        this.vent = options.vent;
        this.router = options.router;
        this.layout = options.layout;
        this.service = new DashboardService();
        this.flipp_service = new FlippService()

        this.listenTo(this.router, "route:showDashboard", this.showDashboard);
        this.listenTo(this.vent, "flipp:searchByPostalCode", this.searchByPostalCode);
    },

    showDashboard: function() {
        var view = new DealFinderLayoutView({
            vent: this.vent
        });

        this.layout.content_area.show(view);
    },

    searchByPostalCode: function() {

    }
  });

  module.exports = DashboardController;
});