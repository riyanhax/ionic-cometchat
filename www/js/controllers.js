angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {

   $scope.launchComet = function (){
	  if(ionic.Platform.isIOS()) {
		  console.debug('launchComet() : will try to launch CometChat ReadyUI page for IOS');
		  if(typeof(ReadyUI) == 'undefined') {
			 alert('ReadyUI is undefined. Are you trying to launch cometchat without cordova ?');
			 console.error('ReadyUI is undefined. Are you trying to launch cometchat without cordova ?');
		  }
		  else {
			  // Will login as demo1 user, granted for cometchat demo server (check app.js for ReadyUI config server init)
			  // after login, open chat window modal
			  ReadyUI.loginWithUsername("demo1","user1",function (result){
				console.debug('launchComet() : CometChat launched successfully');
			  });
		  }
	  }
	  else {
		  console.debug('launchComet() : will try to launch CometChat Readyui page for Android');
		  if(typeof(Readyui) == 'undefined') {
			 alert('Readyui is undefined. Are you trying to launch cometchat without cordova ?');
			 console.error('Readyui is undefined. Are you trying to launch cometchat without cordova ?');
		  }
		  else {
		       alert('login begin ?');
			  // Will login as demo1 user, granted for cometchat demo server (check app.js for ReadyUI config server init)
			  Readyui.login("demo1","user1");
			  		       alert('after login ?');
			  		       Readyui.launchCometChat();

		  }
	  }
    }
    $scope.launchCometDemo2 = function (){
      if(ionic.Platform.isIOS()) {
      	ReadyUI.loginWithUsername("demo2","user2",function (result){});
      }
      else {
		Readyui.login("demo2","user2");
      }
    }
    $scope.loginCallBack = function (result){
      // alert("loginCallBack");
      // alert(result);
    }
    $scope.logout = function (result){
      if(ionic.Platform.isIOS()) {
		  ReadyUI.logout();
		  ReadyUI.setUrl("https://chat.phpchatsoftware.com/");
	  }
	  else {
	  	  Readyui.logout();
		  Readyui.setUrl("https://chat.phpchatsoftware.com/");
	  }
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
