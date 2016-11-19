var app = angular.module('J-Chores', ['ui.router', 'ngMaterial']);

app.config(appConfig);

// appConfig.$inject = [$stateProvider, $mdThemingProvider];

function appConfig($stateProvider, $mdThemingProvider) {
    // $stateProvider
    $mdThemingProvider.theme('default')
        .primaryPalette('blue');
}
