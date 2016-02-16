define("App.Service.Checkout51", function(module) {

    var BaseService = require("App.Service.Base");

    var Checkout51Service = BaseService.extend({
        getDashboard: function() {
            return "test";
        }
    });

    module.exports = Checkout51Service;
});