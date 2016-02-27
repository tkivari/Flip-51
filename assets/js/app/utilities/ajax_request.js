define("App.Utilities.AjaxRequest", function(module) {
  
  var AjaxRequestUtility = Marionette.Object.extend({

      get: function(url, data) {
          return this.send_request(url, "GET", data);
      },

      send_request: function(url, type, data) {
        return $.ajax({
            type: type,
            url: url,
            data: data
        });
    }
  });

  module.exports = AjaxRequestUtility
});