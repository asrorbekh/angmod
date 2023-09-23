MyApp.directive('recordStatus', function() {
    return {
        restrict: 'E',
        scope: {
            id: '=',
            data: '='
        },
        template: `
        <div class="{{ data[id].style}}" >
           {{ data[id].label}}
        </div>`
}
});