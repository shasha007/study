var app=angular.module("puTest",[]);
app.controller("myCtrl",function($scope,$http){
	var params = '{token:"",param:"1"}';
//	$scope.arg={
//		"token":"1",
//		"param":"1"
//	}
	$scope.getData=function(){
//		var promise=$http.post("http://192.168.1.156:8080/pu/assn/queryStart",params);
//		var promise=$http({
//			url:"http://192.168.1.126:8080/pu/assn/queryStart",
//			method:"POST",
//			data:params,
////			data: {'grant_type': 'client_credentials'}, 
////			headers: {
////		            "Content-Type" : "application/json;charset=utf-8",
////		            'X-Requested-With' : 'XMLHttpRequest'
////		   }
//		});
		var promise=$http({
			url:"http://192.168.1.126:8080/pu/assn/queryStart",
			method:"POST",
//			data: {'grant_type': 'client_credentials'},
			data:{"token":"1","param":"1"},
//			headers: {
//		            "Content-Type" : "application/json",
//		            "Accept" : "application/json, text/javascript, */*; q=0.01",
//		            "X-Requested-With" : "XMLHttpRequest"
//		   }
//		  headers: {
//		            "Content-Type" : "application/json;charset=utf-8",
//		            'X-Requested-With' : 'XMLHttpRequest'
//		   }

		});
		promise.then(function(data){
			console.log(data);
		},function(msg){
			
		});
	}
});
