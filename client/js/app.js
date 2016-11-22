var app = angular.module('J-Chores', ['ui.router', 'ngMaterial']);

app.config(appConfig);

appConfig.$inject = ['$stateProvider', '$mdThemingProvider'];

function appConfig($stateProvider, $mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue');

  $stateProvider
  // .state('show-chores', {
  //   url: '/show-chores',
  //   templateUrl: 'views/show-chores.html',
  //   controller: 'ChoresCtrl',
  //   controllerAs: 'Chores'
  // })
    .state('show-chores', {
      url: '/show-chores',
      views: {
        '@': {
          templateUrl: 'views/show-chores.html',
          controller: 'ChoresCtrl',
          controllerAs: 'Chores'
        },
        'expand@show-chores': {
          templateUrl: 'views/partials/expanding-menu.html'
        }
      }
    })
    .state('calendar', {
      url: '/calendar',
      templateUrl: 'views/calendar.html',
      controller: 'CalendarCtrl',
      controllerAs: 'Calendar'
    });
}
