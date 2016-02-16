define("App.Views.Layouts.Index", function(module) {

  var IndexView = Marionette.LayoutView.extend({
    initialize: function(options) {
      console.log(options);
    },

    el: 'body',
    template: Handlebars.templates["index"],

    regions: {
      nav_menu: "#nav_menu",
      content_area: "#app_content"
    },

    render: function() {
      Marionette.LayoutView.prototype.render.call(this);
    }

  });

  module.exports = IndexView;

});