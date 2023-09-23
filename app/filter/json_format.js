MyApp.filter('format_json', function () {
    return function prettyPrintJson(json) {
        return JSON.stringify(json, null, 4);
    };
});