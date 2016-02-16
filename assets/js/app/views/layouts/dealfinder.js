define("App.Views.DealFinderLayout", function(module) {

    var DealFinderLayoutView = Marionette.LayoutView.extend({
        initialize: function(options) {
            this.vent = options.vent;
            this.model = new Backbone.Model();
            this.results_collection = new Backbone.Collection();

            this.results_view = new Backbone.CollectionView({
                vent: this.vent,
                collection: this.results_collection
            });
        },

        el: 'div',
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
            this.vent.trigger("flipp:searchByPostalCode");
        },

        render: function() {
            Marionette.LayoutView.prototype.render.call(this);

            this.search_results.show(this.results_view);
        }

    });

    module.exports = DealFinderLayoutView;

});