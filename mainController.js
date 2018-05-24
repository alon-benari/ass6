'use strict';

var cs142App = angular.module('cs142App', ['ngRoute', 'ngMaterial','ngResource']);

cs142App.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/users', {
                templateUrl: 'components/user-list/user-listTemplate.html',
                controller: 'UserListController'
            }).
            when('/users/:userId', {
                templateUrl: 'components/user-detail/user-detailTemplate.html',
                controller: 'UserDetailController',
                
            }).
            when('/photos/:userId', {
                templateUrl: 'components/user-photos/user-photosTemplate.html',
                controller: 'UserPhotosController'
            }).
            otherwise({
                redirectTo: '/users'
            });
    }]);

cs142App.controller('MainController', ['$scope','$resource',
    function ($scope, $resource) {
        $scope.main = {};
        $scope.main.title = 'Users';
        $scope.main.show = true;
        var info = $resource('test/info',{},{action:{method:'GET'}})
        // var data = info.get().$promise.then(function(d, $scope ){
        //      console.log(d.__v)
        //      $scope.main.version = d.__v
        // })
        var data = info.get(function(d){
            console.log(d) // logs the data nicely
            $scope.main.version = d  // does not update 
        })
        console.log($scope.main.version) // return undefined?!
        
        //console.log(data) // typeof object but cannot access any of its properties

       
        // $scope.doneCallBack = function(model){
        //     console.log('I am done. Now, to upate')
        //     $scope.$apply(function(){
        //         console.log('in doneCallBack')
        //         $scope.main.version = model  // The update happens here.
        //         console.log(typeof(model))
        //         console.log('****versioning***')
        //     })
        // }
        
       
        // $scope.FetchModel = function(url,doneCallBack){
        //     var xhttp2 = new XMLHttpRequest();
        //     xhttp2.onreadystatechange = function(){
        //         console.log(this.readyState, this.status)
        //         if (this.readyState == 4 && this.status == 200) {
        //             $scope.data = JSON.parse(this.responseText)
        //             $scope.doneCallBack($scope.data)
        //       }
        //      } ;

        //      xhttp2.open("GET",url,true)
        //      xhttp2.send();
             
             
        //     } 
        
        // $scope.FetchModel("test/info",$scope.doneCallBack);
        // // $scope.FetchModel("test/info",$scope.doneCallBack);    
        

        
    }]);
