(function() {
  app.controller('AppCtrl', AppCtrl);

  AppCtrl.$inject = ['$scope', '$state'];

  function AppCtrl($scope, $state) {
    var vm = this;

    vm.states = [
      'show-chores',
      'edit-chores',
      'calendar'
    ];

    vm.slideDir = null;

    $scope.$on('nav', function(ev, toState) {
      var fromIndex = vm.states.indexOf($state.current.name),
        toIndex = vm.states.indexOf(toState);

      vm.slideDir = fromIndex > toIndex ? 'left' : 'right';
    });

    $scope.$on('$stateChangeSuccess', function() {
      vm.state = $state.current.name;
    });

  }
}());
