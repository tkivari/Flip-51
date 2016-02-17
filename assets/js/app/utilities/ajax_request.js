define("App.Utilities.AjaxRequest", function(module) {
  
  var AjaxRequestUtility = Marionette.Object.extend({
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