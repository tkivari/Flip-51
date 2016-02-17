define("App.Views.DealFinderLayout", function(module) {

    var DealFinderLayoutView = Marionette.LayoutView.extend({
        initialize: function(options) {
            this.vent = options.vent;
            this.model = new Backbone.Model();
            this.results_collection = new Backbone.Collection();

            this.results_view = Marionette.CollectionView.extend({
                vent: this.vent,
                collection: this.results_collection
            });
        },

        template: Handlebars.templates["layouts/deal_finder"],

        events: {
          "click #enterPostalCode": "searchByPostalCode"
        },

        bindings: {
          "#postal_code": "postal_code"
        },

        regions: {
            search_results: "#search_results"
        },

        searchByPostalCode: function() {
            this.vent.trigger("flipp:searchByPostalCode", this.model, this.view);
        },

        render: function() {
            this.unstickit();
            Marionette.LayoutView.prototype.render.call(this);
            //this.search_results.show(this.results_view);
            console.log('here2');
            this.stickit();
        }

    });

    module.exports = DealFinderLayoutView;

});