angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
	$scope.items = 	[
		{title : 'Elemento 1'},
		{title : 'Elemento 2'},
		{title : 'Elemento 3'},
		{title : 'Elemento 4'},
		{title : 'Elemento 5'}
	];
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
