//touchstart
function load (){
 
    document.addEventListener('touchstart',touch,false);
    document.addEventListener('touchmove',touch,false);
    document.addEventListener('touchend',touch,false);
     
    function touch (event){
        var event = event || window.event;
         
        var oInp = document.getElementById("inp");
 
        switch(event.type){
            case "touchstart":
                oInp.innerHTML ="Touch started (" + event.touches[0].clientX +"," + event.touches[0].clientY +")";
                break;
            case "touchend":
                oInp.innerHTML ="<br>Touch end (" + event.changedTouches[0].clientX +"," + event.changedTouches[0].clientY +")";
                break;
            case "touchmove":
                event.preventDefault();
                oInp.innerHTML ="<br>Touch moved (" + event.touches[0].clientX +"," + event.touches[0].clientY +")";
                break;
        }
         
    }
}
window.addEventListener('load',load,false);
//
function displayDate(){
	document.getElementById("demo").innerHTML+=Date();
}
//
document.write("<h1>你好！</h1>");
//
function changeimg(){
	//取到标签<img />
	img=document.getElementById("myimg");
	//
	if(img.src.match("bulbon")){
		img.src="img/pic_bulboff.gif";
	}else{
		img.src="img/pic_bulbon.gif";
	}
}
//
function myFunction()
{
	//
	var x=document.getElementById("demo1");
	x.style.color="#2AC845";
//
var x=document.getElementById("demo1").value;
if(x==""||isNaN(x))
	{
	alert("不是数字");
	}
}
//
function validateForm()
{
var x=document.forms["myForm"]["fname"].value;
if (x==null || x=="")
  {
  alert("姓必须填写");
  return false;
  }
}
//


//arguments参数不定
function sumAll() {
    var i, sum = 0;
    for(i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
} 

console.log(document.getElementById("demo8"))
document.getElementById("demo8").innerHTML=sumAll(1, 123, 500, 115, 44, 88);
//计数
var counter = 0;

function add() {
    return counter += 1;
}

function myFunction9(){
    document.getElementById("demo9").innerHTML = add();
}
//闭包
var add = (function () {
var counter = 0;
return function () {return counter += 1;}
	})();
	
function myFunction(){
    document.getElementById("demo10").innerHTML = add();
}
var el=document.getElementById("pos");
console.log(el);
el.innerHTML+="新标题";
//弹窗-提示浏览器cookie是否可用。
//function checkCookies()
//{
//if (navigator.cookieEnabled==true)
//	{
//	alert("Cookies 可用")
//	}
//else
//	{
//	alert("Cookies 不可用")
//	}
//}
//toUpperCase
//onchange（）
//当你离开输入框后，函数将被触发，将小写字母转为大写字母
function myFunction()
{
var x=document.getElementById("fname");
x.value=x.value.toUpperCase();
}
//onmouseover 和 onmouseout 事件可用于在用户的鼠标移至 HTML 元素上方或移出元素时触发函数
function mOver(obj)
{
obj.innerHTML="Thank You"
}

function mOut(obj)
{
obj.innerHTML="Mouse Over Me"
}
//点用户点击按钮时触发监听事件
document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
    document.getElementById("demo11").innerHTML = Date();
}
//创建该元素（元素节点），然后向一个已存在的元素追加该元素。
var para=document.createElement("p");
var node=document.createTextNode("这是一个新段落。");
para.appendChild(node);

var element=document.getElementById("div1");
element.appendChild(para);
//删除节点
var parent=document.getElementById("div2");
var child=document.getElementById("p11");
parent.removeChild(child);
//在构造器函数内部定义对象的方法
function person(firstname,lastname,age,eyecolor)
{
	this.firstname=firstname;
	this.lastname=lastname;
	this.age=age;
	this.eyecolor=eyecolor;
	 
	this.changeName=changeName;
	function changeName(name)
	{
	this.lastname=name;
	}
}
myMother=new person("Sally","Rally",48,"green");
myMother.changeName("Doe");
document.write(myMother.lastname);
//循环遍历对象 "person" 的属性
function myFunction()
{
var x;
var txt="";
var person={fname:"Bill",lname:"Gates",age:56}; 

for (x in person)
{
txt=txt + person[x];
}

document.getElementById("demo13").innerHTML=txt;
}
//
var x;
document.write("<p>Only 17 digits: ");
x=12345678901234567890;
document.write(x + "</p>");
//match
var str="Hello world!";
document.write(str.match("world") + "<br>");
document.write(str.match("World") + "<br>");
document.write(str.match("world!"));
//Window 尺寸
var w=window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var h=window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

x=document.getElementById("demo14");
x.innerHTML="Browser inner window width: " + w + ", height: " + h + "."
//
//document.write("Available Width: " + screen.availWidth);
//返回（当前页面的）整个 URL
document.write(location.href);
//属性返回 URL 的路径名
document.write(location.pathname);
//location.assign() 方法加载新的文档。
function newDoc()
{
         window.location.assign("http://127.0.0.1:8020/pu/testAngular.html")
}
//window.navigator 对象在编写时可不使用 window 这个前缀。
txt = "<p>Browser CodeName: " + navigator.appCodeName + "</p>";
txt+= "<p>Browser Name: " + navigator.appName + "</p>";
txt+= "<p>Browser Version: " + navigator.appVersion + "</p>";
txt+= "<p>Cookies Enabled: " + navigator.cookieEnabled + "</p>";
txt+= "<p>Platform: " + navigator.platform + "</p>";
txt+= "<p>User-agent header: " + navigator.userAgent + "</p>";
txt+= "<p>User-agent language: " + navigator.systemLanguage + "</p>";

document.getElementById("example").innerHTML=txt;
//
//if(window.localStorage){     alert("浏览支持localStorage") }else{    alert("浏览暂不支持localStorage") }
//
//localStorage.lastName="jone";
//document.write("Last Name:"localStorage.lastName);
//
localStorage.lastname="Smith2";
document.write("Last name: " + localStorage.lastname);
//刷新页面会看到计数器在增长。
//请关闭浏览器窗口，然后再试一次，计数器已经重置了。
if (sessionStorage.pagecount)
	{
	sessionStorage.pagecount=Number(sessionStorage.pagecount) +1;
	}
else
	{
	sessionStorage.pagecount=1;
	}
document.write("Visits " + sessionStorage.pagecount + " time(s) this session.");
//
var storage = window.localStorage;
if (!storage.getItem("pageLoadCount")) storage.setItem("pageLoadCount",0);
storage.pageLoadCount = parseInt(storage.getItem("pageLoadCount")) + 1;//必须格式转换
//document.getElementByIdx_x("count").innerHTML = storage.pageLoadCount;
showStorage();
if(window.addEventListener){
 window.addEventListener("storage",handle_storage,false);
}else if(window.attachEvent){
 window.attachEvent("onstorage",handle_storage);
}
function handle_storage(e){
 if(!e){e=window.event;}
 showObject(e);
}
function showObject(obj){
 //递归显示object
 if(!obj){return;}
 for(var i in obj){
  if(typeof(obj[i])!="object" || obj[i]==null){
   document.write(i + " : " + obj[i] + "<br/>");
  }else{
   document.write(i + " : object" + "<br/>");
  }
 }
}
storage.setItem("a",5);
function changeS(){
 //修改一个键值，测试storage事件
 if(!storage.getItem("b")){storage.setItem("b",0);}
 storage.setItem('b',parseInt(storage.getItem('b'))+1);
}
function showStorage(){
 //循环显示localStorage里的键值对
 for(var i=0;i<storage.length;i++){
  //key(i)获得相应的键，再用getItem()方法获得对应的值
  document.write(storage.key(i)+ " : " + storage.getItem(storage.key(i)) + "<br>");
 }
}
//on
var count = 0;
$( "body" ).on( "click", $("#ee3"), function() {
  $( this ).after( "<p>Another paragraph! " + (++count) + "</p>" );
});
//函数的四种调用模式及this的初始化
//1.输出zhangsan
//var person = {
//  name: "defaultName",
//  setName : function(name){
//      this.name = name;
//  }
//};
//person.setName("zhangsan");
//alert(person.name);//上面注释掉，输出defaultName
//2.
// 定义一个Person的构造器，在调用时一定要用new调用
var Person = function(name){
    this.name = name;
}
// 添加一个方法到Person
Person.prototype.getName = function(){
    return this.name;
};
// 构造一个Person对象
var person = new Person("zhangsan");
alert(person.getName()); // 调用getName获取person对象中name属性的值

//3.
    // 定一个累加方法。如sum(1,2,3,4...)
    // 该方法位于window执行环境中。
    var displayName = function(){
        alert("sum的执行环境: " + typeof(this));
        alert("Name: " + this.name); // 取出当前执行环境中name属性
    }
    // 定一个Person对象
    var Person = {
        name: "zhangsan"
    };
    displayName.apply(Person);