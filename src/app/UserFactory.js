/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
// (function() {
	'use strict';

	angular.module('BlurAdmin.authService', [])
		.factory('User', ['$http', '$location', '$q', '$rootScope', '$window', function ($http, $location, $q, $rootScope, $window ) {

			var userdata = null;
			var ServerAdress = 'http://kubox-api-dev.azurewebsites.net';
			var recivedData = null;
			var token=null;
			var type=null;
			var UserId=null;
			var recivedDatakey=null;
			var type=[];
			//set token in local
			var setObject = function(key, value) {
			// $window.localStorage[key] = JSON.stringify(value);
			$window.sessionStorage[key] = JSON.stringify(value);
			};
			//get data from local
			var getObject=function(key) {
				// return JSON.parse($window.localStorage[key] || '{}');
				return JSON.parse($window.sessionStorage[key] || '{}');
			};

			return {

				SetUser:function(value){
					type=value;
					return type;
				},
				GetUser:function(){
					return type;
				},
						getJson:function() {
						return userdata.token;
					},
					setJson:function(value){
						userdata = value;
					},

					 setUserData:function(key, value) {
						$window.sessionStorage[key] = JSON.stringify(value);
					},
					getUserData:function(key) {
					return JSON.parse($window.sessionStorage[key] || '{}');
					},

					getMessage: function(){

						recivedData=getObject('KUjBoxwDatat');


				if(recivedData.token==null|| recivedData.token== undefined){
					$location.path('/');
				}
				else{
					return recivedData;
				}
			},


				Login: function (UserData) {
					userdata = UserData;
					return $http.post(ServerAdress + '/user/login',UserData, {
						headers: {'Content-Type': 'application/json'}
					}).success(function (data) {
						console.log(data);
						setObject('encrypteddata',data.token);
						setObject('encrypteddatakey',data.id);
						UserId=data.id;
						var typeCheck= data.role;
						if(Array.isArray(typeCheck)===true){
							 type=typeCheck
						}
						else{

							type.push(typeCheck);

						}

						type.forEach(function(datarole){
								if(datarole=='owner'){
										setObject('menus',[{"name":"dashboard"},{"name":"summary"},{"name":"reseller"},{"name":"prospects"},{"name":"IPTV"},{"name":"tickets"},{"name":"box"},{"name":"accountDetails"}]);
										// SetUser("owner");
								}
								else if(datarole=='partner'){
											setObject('menus',[{"name":"dashboard"},{"name":"summary"},{"name":"reseller"},{"name":"prospects"},{"name":"IPTV"}]);
											// SetUser("partner");
								}
								else if (datarole=='reseller') {
											setObject('menus',[{"name":"summary"},{"name":"prospects"},{"name":"IPTV"}]);
												// SetUser("reseller");
								}
								else{
									 $location.path('/');
								}

						});

					});
				},
				OverviewSales : function(){
					//userdata=UserData;
					recivedData=getObject('encrypteddata');
					token=recivedData;
					return $http.get(ServerAdress+'/sale/overview',{
						headers: {'Content-Type':'application/json','cache-control': 'no-cache','x-access':token }
					}).success(function(data){
						console.log(data);
					});
				},
				OverviewParteners : function(){
					//userdata=UserData;
					recivedData=getObject('encrypteddata');
					token=recivedData;
					return $http.get(ServerAdress+'/partnership/overview',{
						headers: {'Content-Type':'application/json','cache-control': 'no-cache','x-access':token }
					}).success(function(data){
						console.log(data);
					});
				},
				OverviewResellers : function(){
					//userdata=UserData;
					recivedData=getObject('encrypteddata');
					token=recivedData;
					return $http.get(ServerAdress+'/reseller/overview',{
						headers: {'Content-Type':'application/json','cache-control': 'no-cache','x-access':token }
					}).success(function(data){
						console.log(data);
					});
				},
				OverviewProspects : function(){
					//userdata=UserData;
					recivedData=getObject('encrypteddata');
					token=recivedData;
					return $http.get(ServerAdress+'/customer/overview',{
						headers: {'Content-Type':'application/json','cache-control': 'no-cache','x-access':token }
					}).success(function(data){
						console.log(data);
					});
				},
				OverviewSalesGraph : function(){
					//userdata=UserData;
					recivedData=getObject('encrypteddata');
					token=recivedData;
					return $http.get(ServerAdress+'/sale/graph',{
						headers: {'Content-Type':'application/json','cache-control': 'no-cache','x-access':token }
					}).success(function(data){
						console.log(data);
					});
				},
				Summary : function(){
					//userdata=UserData;
					recivedData=getObject('encrypteddata');
					token=recivedData;
					return $http.get(ServerAdress+'/sale/getAll',{
						headers: {'Content-Type':'application/json','cache-control': 'no-cache','x-access':token }
					}).success(function(data){
						console.log(data);
					});
				},
				UserInfo : function(){
					//userdata=UserData;
					recivedData=getObject('encrypteddata');
					recivedDatakey=getObject('encrypteddatakey');
					token=recivedData;
					return $http.get(ServerAdress+'/user/'+recivedDatakey,{
						headers: {'Content-Type':'application/json','cache-control': 'no-cache','x-access':token }
					}).success(function(data){
						console.log(data);
					});
				},
				UpdatePassword : function(data){
					//userdata=UserData;
					recivedData=getObject('encrypteddata');
					recivedDatakey=getObject('encrypteddatakey');
					token=recivedData;
					return $http.post(ServerAdress+'/user/updatePassword/'+recivedDatakey,data,{
						headers: {'Content-Type':'application/json','cache-control': 'no-cache','x-access':token }
					}).success(function(data){
						console.log(data);
					});
				},
				SalesSummary : function(){
					recivedData=getObject('encrypteddata');
					token=recivedData;
					return $http.get(ServerAdress+'/sale/summary',{
						headers: {'Content-Type':'application/json','cache-control': 'no-cache','x-access':token}
					}).success(function(data){
						console.log(data);
					});
				},
				TotalSale : function(data){
					recivedData=getObject('encrypteddata');
					token=recivedData;
					return $http.post(ServerAdress+'/sale/revenue',data,{
						headers: {'Content-Type':'application/json','cache-control': 'no-cache','x-access':token}
					}).success(function(data){
						console.log(data);
					});
				},
				Revenue : function(data){
					recivedData=getObject('encrypteddata');
					token=recivedData;
					return $http.post(ServerAdress+'/sale/revenue2',data,{
						headers: {'Content-Type':'application/json','cache-control':'no-cache','x-access':token}
					}).success(function(data){
						console.log(data);
					});
				},

				boxDetails : function(){
					recivedData=getObject('encrypteddata');
					token=recivedData;
					return $http.get(ServerAdress+'/box',{
						headers: {'Content-Type':'application/json','cache-control': 'no-cache','x-access':token}
					}).success(function(data){
						console.log(data);
					});
				},
				boxAdd : function(data){
					recivedData=getObject('encrypteddata');
					token=recivedData;
					return $http.post(ServerAdress+'/box',data,{
						headers: {'Content-Type':'application/json','cache-control': 'no-cache','x-access':token}
					}).success(function(data){
						console.log(data);
					});
				},
				boxUpdate : function(data){
					recivedData=getObject('encrypteddata');
					token=recivedData;
					return $http.put(ServerAdress+'/box/'+data._id,data,{
						headers: {'Content-Type':'application/json','cache-control': 'no-cache','x-access':token}
					}).success(function(data){
						console.log(data);
					});
				},
				Payments : function(){
					recivedData=getObject('encrypteddata');
					token=recivedData;
					return $http.get(ServerAdress+'/payment',{
						headers: {'Content-Type':'application/json','cache-control': 'no-cache','x-access':token}
					}).success(function(data){
						console.log(data);
					});
				},
				prospectSummary : function(){
					recivedData=getObject('encrypteddata');
					token=recivedData;
					return $http.get(ServerAdress+'/user/prospectSummary',{
						headers: {'Content-Type':'application/json','cache-control': 'no-cache','x-access':token}
					}).success(function(data){
						console.log(data);
					});
				},
				logOut : function(){
					recivedData=getObject('encrypteddata');
					token=recivedData;
					return $http.get(ServerAdress+'/user/logout',{
						headers: {'Content-Type':'application/json','cache-control': 'no-cache','x-access':token}
					}).success(function(data){
						console.log(data);
					});
				},

			}
		}]);
// })
