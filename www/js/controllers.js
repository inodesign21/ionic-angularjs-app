angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
})

.controller('NewMenuCtrl',
    function NewMenuCtrlFunction($scope, $http) {
        var url = 'http://ws.audioscrobbler.com/2.0/';
        var params = {
            method: 'album.getinfo',
            api_key: '08963bdec6bde5d6189e3d7dc86fa6ac',
            album: 'Lonerism',
            artist: 'Tame Impala',
            format: 'json'
        };
        $http.get(url, { params: params })
            .success(function (data) {
                $scope.albums = data.album;
            })
            .error(function (data, status) {
                console.log(data || "Request failed");
                console.log(status);
            });       
    });