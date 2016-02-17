define("App.Service.Base", function(module) {
  
    var AjaxRequestUtility = require("App.Utilities.AjaxRequest");

    var BaseService = Marionette.Object.extend({
        initialize: function(options) {
            this.ajax = new AjaxRequestUtility();
        }
    });

    module.exports = BaseService;
});