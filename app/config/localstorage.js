MyApp.config(['localStorageServiceProvider', function (localStorageServiceProvider) {
    localStorageServiceProvider
        .setPrefix('MyApp') // Set a prefix for keys to avoid conflicts with other apps
        .setStorageType('localStorage'); // Use localStorage as the storage medium
}]);