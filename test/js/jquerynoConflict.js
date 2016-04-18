//var jp=jQuery.noConflict();
$.noConflict();
jQuery(document).ready(function(){
  jQuery("[id='btn']").click(function(){
    jQuery("p.pp").text("jQuery 仍在运行！");
  });
});