(function() {
  app.controller('ChoresCtrl', ChoresCtrl);

  ChoresCtrl.$inject = ['$scope', '$http', 'ChoresService', 'DateService'];

  function ChoresCtrl($scope, $http, ChoresService, DateService) {
    var vm = this;

    vm.today = DateService.today;
    vm.todaysDate = DateService.todaysDate;
    vm.monthName = DateService.monthName;
    ChoresService.getChores
      .then(function(chores) {
        vm.chores = chores;
      });

    // vm.finish = ChoresService.finish;
    vm.finish = function(chore) {
      var index = vm.chores.indexOf(chore),
        dayId = DateService.days.indexOf(vm.today);

      vm.chores.splice(index, 1);
      $http.post('/api/chores/daily/' + dayId + '/finish/' + chore.id);
    };
  }
}());
