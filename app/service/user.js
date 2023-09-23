MyApp.factory('User', ['$resource', function ($resource) {
    return $resource(apiUrl + '/users/:id', { id: '@id' }, {
        update: {
            method: 'PUT'
        }
    });
}]);

MyApp.service('UserService', ['User', 'UserModel', function (User, UserModel) {
    // Create a new user
    this.createUser = function (userData) {
        const user = new UserModel(null, userData.name, userData.email);
        return User.save(user).$promise;
    };

    // Get a list of all users
    this.getUsers = function () {
        return User.query().$promise;
    };
}]);