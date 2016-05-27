$(function(){
  $('#wrap').on('click', function(event) {
    var obj=document.body.scrollTop>0? document.body:document.documentElement;
    $(obj).animate({"scrollTop":0}, 1000);
    $(this).animate({"opacity":0.5}, 1000);
  }).on('mouseover', function(event) {
    $(this).css('opacity',1);
  }).on('mouseout',function(event) {
    $(this).css('opacity',0.5);
  });
});
$(document).scroll(function(event) {
  var goTop=$('#wrap');
  var scrollTop=document.body.scrollTop || document.documentElement.scrollTop || 0;
  if(scrollTop>0){
    if(goTop.css('display')=='none'){
      $('#wrap').fadeIn(500);
    } 
  }else{
    if(goTop.css('display')!='none'){
      $('#wrap').fadeOut(500);
    }
  }
});