$(document).ready(function(){
  $("p").click(function(){
  	$(this).hide(1000);
  });
  $("#toggle").click(function(){
//	$("i").toggle('slow');
	$("p").fadeIn(4000);//淡入已隐藏的内容
	
  });
//$("button").click(function(){
//	$("p").show();
//	$("p").css("background-color","red").slideDown(2000).slideUp(2000);
//});
  //fadeIn  fadeOut  fadeToggle  fadeToopacity 参数将淡入淡出效果设置为给定的不透明度（值介于 0 与 1 之间）
  $("button").click(function(){
//  $("#div1").fadeIn();
//  $("#div2").fadeIn("slow");
//  $("#div3").fadeIn(3000);
//  $("#div1").fadeOut();
//  $("#div2").fadeOut("slow");
//  $("#div3").fadeOut(3000);
//  $("#div1").fadeToggle();
//  $("#div2").fadeToggle("slow");
//  $("#div3").fadeToggle(3000);
    $("#div1").fadeTo("slow",0.15);
    $("#div2").fadeTo("slow",0.4);
    $("#div3").fadeTo("slow",0.7);
  });
  //slideDown向下滑动元素slideUp
  $(".flip").click(function(){
    $(".panel").slideDown("slow");
//  $(".panel").slideUp("slow");
//  $(".panel").slideToggle("slow");
  });
  //animate
    $("#anima").click(function(){
    $(".divani").animate({
    	left:'100px',
    	fontSize:'3em',
//  	opacity:'0.5',
        height:'+=150px',
        width:'+=150px'
//      height:'toggle'
    },'slow');
    $(".divani").animate({height:'300px',opacity:'0.4'},"slow");
    $(".divani").animate({width:'300px',opacity:'0.8'},"slow");
    $(".divani").animate({height:'100px',opacity:'0.4'},"slow");
    $(".divani").animate({width:'100px',opacity:'0.8'},"slow");
  });
   $("#stop").click(function(){
    $("#panel").stop();
  });
  //.text .html .val
    $("#btn1").click(function(){
    $("#test1").text("Hello world!");
  });
  $("#btn2").click(function(){
    $("#test2").html("<b>Hello world!</b>");
  });
  $("#btn3").click(function(){
    $("#test3").val("Dolly Duck");
  });
  //append
    $("#btn7").click(function(){
//  $("p#apen").append(" <b>Appended text</b>.");
    $("p#apen").prepend(" <b>Appended text</b>.");
  });

  $("#btn8").click(function(){
//  $("ol").append("<li>Appended item</li>");
	$("ol").prepend("<li>Appended item</li>");
  });
});
function afterText()
{
var txt1="<b>I </b>";                    // 以 HTML 创建元素
var txt2=$("<i></i>").text("love ");     // 通过 jQuery 创建元素
var txt3=document.createElement("big");  // 通过 DOM 创建元素
	txt3.innerHTML="jQuery!";
$("img").after(txt1,txt2,txt3);          // 在 img 之后插入新元素
}