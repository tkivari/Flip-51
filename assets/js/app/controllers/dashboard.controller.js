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
            this.flipp_service = new FlippService({ vent: this.vent });
            this.checkout_51_service = new Checkout51Service({ vent: this.vent });

            this.listenTo(this.router, "route:showDashboard", this.showDashboard);
            this.listenTo(this.vent, "flipp:searchByPostalCode", this.searchByPostalCode);
        },

        showDashboard: function() {
            this.checkout_51_service.getDeals();

            var view = new DealFinderLayoutView({
                vent: this.vent
            });

            //console.log(this.layout)
            this.layout.content_area.show(view);
        },

        searchByPostalCode: function(model, view) {
            var controller = this;

            if (model.get("postal_code")) {
                _.each(this.checkout_51_service.offers, function (offer) {
                    controller.flipp_service.getSalesByOffer(offer, model.get("postal_code"));
                })
            }

            controller = null;

        }
    });

    module.exports = DashboardController;
});