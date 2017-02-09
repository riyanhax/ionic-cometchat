angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {

   $scope.launchComet = function (){
      console.debug('launchComet() : will try to launch CometChat ReadyUI page');
	  if(typeof(ReadyUI) == 'undefined') {
	     alert('ReadyUI is undefined. Are you trying to launch cometchat without cordova ?');
 		 console.error('ReadyUI is undefined. Are you trying to launch cometchat without cordova ?');
	  }
      else {
	      // Will login as demo1 user, granted for cometchat demo server (check app.js for ReadyUI config server init)
		  ReadyUI.loginWithUsername("demo1","user1",function (result){
			console.debug('launchComet() : CometChat launched successfully');
		  });
	  }
    }
    $scope.loginCallBack = function (result){
      // alert("loginCallBack");
      // alert(result);
    }

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
