(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['index'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"app\">\n  \n  <div class=\"header\"></div>\n  <div id=\"nav_menu\"></div>\n  <div id=\"app_content\"></div>\n  <div class=\"clear\"></div>\n\n</div>";
},"useData":true});
templates['results'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});
templates['layouts/deal_finder'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"search_bar\">\n    Enter Postal Code: <input type=\"text\" id=\"postal_code\" />&nbsp;<div class=\"button\" id=\"enterPostalCode\">Find Deals</div>\n    <br/><br/>\n    \n</div>";
},"useData":true});
})();