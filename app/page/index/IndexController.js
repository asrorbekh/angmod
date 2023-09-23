MyApp.controller('IndexController', function ($scope) {
    $scope.text = 'My name';

    $scope.items = [
        {
            id: 1,
            title: 'Me',
        },
        {
            id: 2,
            title: 'You',
        },
        {
            id: 3,
            title: 'We',
        },
    ];

    $scope.listView = '/app/page/index/list.html'
    $scope.tableView = '/app/page/index/table.html'


    $scope.url = $scope.tableView;

    $scope.showTable = function () {
        $scope.url = $scope.tableView;
    };

    $scope.showList = function () {
        $scope.url = $scope.listView;
    };

    $scope.options = [
        {
            display: "Table", value: 'table',
        },
        {
            display: "List", value: 'list',
        },
    ];

    $scope.mode = $scope.options[0];

});