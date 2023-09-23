MyApp.factory('UserModel', function () {
    function User(id, name, email) {
        this.id = id || null;
        this.name = name || '';
        this.email = email || '';
    }

    return User;
});
