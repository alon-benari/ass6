'use strict';

cs142App.controller('UserPhotosController', ['$scope', '$routeParams','$resource',
  function($scope, $routeParams, $resource) {
    /*
     * Since the route is specified as '/photos/:userId' in $routeProvider config the
     * $routeParams  should have the userId property set with the path from the URL.
     */
    var userId = $routeParams.userId;
    console.log('UserPhoto of ', $routeParams.userId);

    // console.log('window.cs142models.photoOfUserModel($routeParams.userId)',
      //  window.cs142models.photoOfUserModel(userId));
    // $scope.main.photoData = window.cs142models.photoOfUserModel(userId)
    $scope.main.context = 'Photos of: '
    var userPhotos = $resource('/photosOfUser/:_id',{_id:'@id'},{method:'get'})
    console.log(typeof(userPhotos))
    userPhotos.query({_id:userId},function(userPhotoList){
        $scope.main.photoData = userPhotoList
        
        console.log(userPhotoList)
    })
    // Make a call to the server
  //   $scope.doneCallBack = function(model){
  //     console.log('I am done. Now, to upate')
  //     $scope.$apply(function(){
  //         console.log('in doneCallBack')
  //         $scope.main.photoData= model  // The update happens here.
  //         console.log($scope.main.photoData);
  //         console.log('***Get Photo by id****')
  //     })
  // }


  // $scope.FetchModel = function(url,doneCallBack){
  //     var xhttp2 = new XMLHttpRequest();
  //     xhttp2.onreadystatechange = function(){
  //         console.log(this.readyState, this.status)
  //         if (this.readyState == 4 && this.status == 200) {
  //           $scope.data = JSON.parse(this.responseText)
  //           $scope.doneCallBack($scope.data)
  //       }
  //      };
  //      xhttp2.open("GET",url,true)
  //      xhttp2.send();
       
       
  //     } 

  
  //  $scope.FetchModel("photosOfUser/"+userId, $scope.doneCallBack)
  //  console.log('from user-detailController: ' , $scope.main.usersModel)


    

  }]);
