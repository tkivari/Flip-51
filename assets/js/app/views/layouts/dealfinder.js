define("App.Views.DealFinderLayout", function(module) {

    var DealItemView = Marionette.ItemView.extend({
        tagName: "div",
        template: Handlebars.templates["deal_item"]
    });

    var DealCollectionView = Marionette.CollectionView.extend({
        initialize: function(options) {
            this.vent = options.vent;
            this.collection = options.collection;

            this.listenTo(this.vent, 'dealfinder:addOfferSales', this.addOfferSales);
        },

        childView: DealItemView,

        addOfferSales: function(offer) {
            this.collection.add(offer);
        }

    });

    var DealFinderLayoutView = Marionette.LayoutView.extend({
        initialize: function(options) {
            this.vent = options.vent;
            this.model = new Backbone.Model();
            this.results_collection = new Backbone.Collection();

            this.results_view = new DealCollectionView({
                vent: this.vent,
                collection: this.results_collection
            });

            this.model.set("offers_loaded", false);

            this.listenTo(this.vent, 'checkout51:loaded', this.offersLoaded);
        },

        template: Handlebars.templates["layouts/deal_finder"],

        events: {
          "click #enterPostalCode": "searchByPostalCode"
        },

        bindings: {
          "#postal_code": "postal_code",
          "#enterPostalCode": {
              attributes: [{
                  name: "class",
                  observe: "offers_loaded",
                  onGet: function(loaded) {
                      return loaded ? "" : "hidden";
                  }
              }]


          }
        },

        regions: {
            search_results: "#search_results"
        },

        offersLoaded: function() {
            this.model.set("offers_loaded", true);
        },

        searchByPostalCode: function() {
            this.vent.trigger("flipp:searchByPostalCode", this.model, this.view);
        },

        render: function() {
            this.unstickit();
            Marionette.LayoutView.prototype.render.call(this);
            this.search_results.show(this.results_view);
            this.stickit();
        }

    });

    module.exports = DealFinderLayoutView;

});