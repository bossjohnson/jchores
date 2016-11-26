(function() {
  app.config(appConfig);

  appConfig.$inject = ['$stateProvider', '$mdThemingProvider', '$urlRouterProvider'];

  function appConfig($stateProvider, $mdThemingProvider, $urlRouterProvider) {
    $mdThemingProvider
      .theme('default')
      .primaryPalette('green');

    $stateProvider
      .state('show-chores', {
        url: '/show-chores',
        templateUrl: 'views/show-chores.html',
        controller: 'ChoresCtrl',
        controllerAs: 'Chores'
      })
      .state('edit-chores', {
        url: '/edit-chores',
        templateUrl: 'views/edit-chores.html',
        controller: 'ChoresCtrl',
        controllerAs: 'Chores'
      })
      .state('calendar', {
        url: '/calendar',
        templateUrl: 'views/calendar.html',
        controller: 'CalendarCtrl',
        controllerAs: 'Calendar'
      });

    $urlRouterProvider
      .otherwise('/show-chores');
  }
}());
