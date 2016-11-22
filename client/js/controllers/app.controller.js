(function() {
  app.controller('AppCtrl', AppCtrl);

  AppCtrl.$inject = ['$scope', '$state'];

  function AppCtrl($scope, $state) {
    var vm = this;

    $scope.$on('$stateChangeSuccess', function() {
      vm.state = $state.current.name;
    });
  }
}());
