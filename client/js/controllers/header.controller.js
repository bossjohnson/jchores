(function() {
  app.controller('HeaderCtrl', HeaderCtrl);

  HeaderCtrl.$inject = ['$scope', '$timeout', '$state', 'DateService'];

  function HeaderCtrl($scope, $timeout, $state, DateService) {
    var vm = this;

    $timeout(function() {
      vm.today = DateService.today;
      vm.todaysDate = DateService.todaysDate;
      vm.monthName = DateService.monthName;
      vm.currentNavItem = $state.current.name;
    }, 0);
  }
}());
