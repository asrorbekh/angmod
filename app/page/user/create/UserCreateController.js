MyApp.controller('CreateUserController', ['$scope', 'UserService', function ($scope, UserService) {
    $scope.createUser = function () {
        const userData = {
            name: $scope.name,
            email: $scope.email
        };

        UserService.createUser(userData)
            .then(function (response) {
                console.log('User created:', response);
                // Redirect to the user list page
                $state.go('userList');
            })
            .catch(function (error) {
                console.error('Error creating user:', error);
            });
    };
}]);