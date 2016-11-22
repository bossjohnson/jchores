(function() {
  app.config(appConfig);

  appConfig.$inject = ['$stateProvider', '$mdThemingProvider'];

  function appConfig($stateProvider, $mdThemingProvider) {
    $mdThemingProvider
      .theme('default')
      .primaryPalette('blue');

    $stateProvider
      .state('show-chores', {
        url: '/show-chores',
        templateUrl: 'views/show-chores.html',
        controller: 'ChoresCtrl',
        controllerAs: 'Chores'
      })
      .state('calendar', {
        url: '/calendar',
        templateUrl: 'views/calendar.html',
        controller: 'CalendarCtrl',
        controllerAs: 'Calendar'
      });
  }
}());
