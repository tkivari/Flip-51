define("App.Service.Flipp", function(module) {

    var BaseService = require("App.Service.Base");
    var OfferTypes = require("App.Enums.OfferTypes");

    var FlippService = BaseService.extend({
        initialize: function(options) {
            this.vent = options.vent;
            FlippService.__super__.initialize.apply(this, arguments);
        },

        getSalesByOffer: function(offer, postal_code) {
            var url = window.env.development.flipp_api + "items/search";
            var offer_name = offer.name;
            if (offer_name.indexOf(":") > -1) {
                var arr = offer_name.split(":");
                offer_name = arr[1];
            }
            var data = {
                locale: 'en-ca',
                postal_code: postal_code,
                q: offer_name
            };

            if (offer.display_type == OfferTypes.standard && offer.remaining > 0) {
                var service = this;
                this.ajax.get(url, data)
                    .done(function (response) {
                        offer.sale_items = [];

                        var addSaleItems = function() {
                            service.vent.trigger("dealfinder:addOfferSales", offer);
                        };

                        var afterEach = _.after(response.items.length, addSaleItems);
                        _.each(response.items, function(item) {
                            var flyer_item_url = window.env.development.flipp_api + "items/" + item.flyer_item_id
                            var flyer_item_data = {
                                locale: 'en-ca'
                            };

                            service.ajax.get(flyer_item_url, flyer_item_data)
                                .done(function (flyer_item_response) {
                                    offer.sale_items.push(flyer_item_response.item);
                                    afterEach();
                                });
                        })

                    });
            }
        }
    });

    module.exports = FlippService;
});