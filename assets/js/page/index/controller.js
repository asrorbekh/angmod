app.controller('CourseController', function ($scope) {
    $scope.data = UserModel;

    $scope.setStyle = function (passed) {
        return passed ? 'color:green' : 'color:red; font-weight: bold';
    };

    $scope.addNewCourse = function () {
        $scope.data.courses.push({
            name: $scope.courseName,
            passed: false
        });

        $scope.courseName = '';
    };

    $scope.showText = function (text){
        return text ? 'Yes' : 'No';
    };

});