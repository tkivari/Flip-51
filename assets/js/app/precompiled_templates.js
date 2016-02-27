(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['deal_item'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "            <div class=\"sale_item\">\n                <div id=\"price\" class=\"title\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.current_price : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + alias4(((helper = (helper = helpers.merchant || (depth0 != null ? depth0.merchant : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"merchant","hash":{},"data":data}) : helper)))
    + "</div>\n                <div id=\"name\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\n                <div id=\"extra_info\">"
    + alias4(((helper = (helper = helpers.sale_story || (depth0 != null ? depth0.sale_story : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sale_story","hash":{},"data":data}) : helper)))
    + "</div>\n\n            </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return alias4(((helper = (helper = helpers.pre_price_text || (depth0 != null ? depth0.pre_price_text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pre_price_text","hash":{},"data":data}) : helper)))
    + "$"
    + alias4(((helper = (helper = helpers.current_price || (depth0 != null ? depth0.current_price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"current_price","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.price_text || (depth0 != null ? depth0.price_text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price_text","hash":{},"data":data}) : helper)))
    + " at ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"deal_parent\">\n\n    <div class=\"deal_details\">\n        <div id=\"name\" class=\"title\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\n        <div id=\"description\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</div>\n        <div id=\"cash_back\">$"
    + alias4(((helper = (helper = helpers.cash_back || (depth0 != null ? depth0.cash_back : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cash_back","hash":{},"data":data}) : helper)))
    + " cash back</div>\n    </div>\n    <div class=\"sales\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.sale_items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
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