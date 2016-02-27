(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['deal_item'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <div class=\"sale_item\">\n                <div id=\"name\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\n                <div id=\"merchant\">"
    + alias4(((helper = (helper = helpers.merchant || (depth0 != null ? depth0.merchant : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"merchant","hash":{},"data":data}) : helper)))
    + "</div>\n                <div id=\"price\">"
    + alias4(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data}) : helper)))
    + "</div>\n            </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"deal_parent\">\n\n    <div class=\"deal_details\"></div>\n    <div class=\"sales\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.sale_items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n</div>\n";
},"useData":true});
templates['index'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"app\">\n  \n  <div class=\"header\"></div>\n  <div id=\"nav_menu\"></div>\n  <div id=\"app_content\"></div>\n  <div class=\"clear\"></div>\n\n</div>";
},"useData":true});
templates['results'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});
templates['layouts/deal_finder'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"search_bar\">\n    <input type=\"text\" placeholder=\"Postal Code...\" id=\"postal_code\" class=\"form-control\" />&nbsp;<div class=\"btn btn-primary\" id=\"enterPostalCode\">Find Deals</div>\n    <br/><br/>\n</div>\n<div id=\"search_results\"></div>";
},"useData":true});
})();