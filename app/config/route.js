MyApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $compileProvider) {

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/app/page/index/index.html',
            controller: 'IndexController'
        })
        .state('notFound', {
            url: '/not-found',
            templateUrl: '/app/page/error/notfound/not-found.html',
            controller: 'NotFoundController'
        });

    $urlRouterProvider.otherwise('/not-found');

    $locationProvider.html5Mode(true);

    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(http|https|file|blob|cdvfile|content):|data:image\//);

});