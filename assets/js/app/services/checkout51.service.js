define("App.Service.Checkout51", function(module) {

    var BaseService = require("App.Service.Base");

    var Checkout51Service = BaseService.extend({

        initialize: function(options) {
            this.offers = [];
            this.vent = options.vent;
            Checkout51Service.__super__.initialize.apply(this, arguments);
        },

        getDeals: function() {
            var last_page = false;
            var page = 1;
            //var deferred = $.Deferred();
            var url = window.env.development.checkout_51_api + "v1/getOffers";
            var data = {
                minify: true,
                show_custom_content: true,
                show_instant_rewards: true,
                page: 0,
                android_request_id: 1455551484094,
                lang: 'EN_US',
                platform: 'android',
                version: '3.3',
                uuid: '34c4fdbe-8f49-439d-b0ac-97fd2912ec20',
                token_version: 2,
                timezone: 'America/Toronto',
                authtoken: '65c9c7a0d11c7166880e250ef61e330e',
                auth_token: '65c9c7a0d11c7166880e250ef61e330e',
                user_id: 5227463
            }

            this.getDealPages(url,"GET",data,0);

            //return deferred.promise();

        },

        getDealPages: function(url, type, data, page) {
            var view = this;
            this.ajax.get(url, data)
            .done(function(response) {
                if(response.offers) {
                    view.offers = view.offers.concat(response.offers);
                }
                ++page;
                data.page = page;
                if (response.last_page == false) {
                    view.getDealPages(url,type,data,page)
                } else {
                    view.vent.trigger('checkout51:loaded');
                }
            })
        }
    });

    module.exports = Checkout51Service;
});