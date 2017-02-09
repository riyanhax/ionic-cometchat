angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {

   $scope.launchComet = function (){
      ReadyUI.loginWithUsername("demo1","user1",function (result){});
    }
    $scope.launchCometDemo2 = function (){
      ReadyUI.loginWithUsername("demo2","user2",function (result){});
    }
    $scope.loginCallBack = function (result){
      // alert("loginCallBack");
      // alert(result);
    }
    $scope.logout = function (result){
      ReadyUI.logout();
      ReadyUI.setUrl("https://chat.phpchatsoftware.com/");
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
