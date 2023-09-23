MyApp.controller('UserListController', ['$scope', 'UserService', function ($scope, UserService) {
    UserService.getUsers()
        .then(function (users) {
            $scope.users = users;
        })
        .catch(function (error) {
            console.error('Error fetching users:', error);
        });
}]);