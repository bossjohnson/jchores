(function() {
  app.controller('ChoresCtrl', ChoresCtrl);

  ChoresCtrl.$inject = ['$scope', '$http', 'ChoresService', 'DateService'];

  function ChoresCtrl($scope, $http, ChoresService, DateService) {
    var vm = this;

    vm.days = DateService.days;
    vm.today = DateService.today;
    vm.todaysDate = DateService.todaysDate;
    vm.monthName = DateService.monthName;
    vm.addChores = {};

    ChoresService.getChores().then(function(chores) {
      vm.chores = chores.data;
    });

    ChoresService.allChores.then(function(chores) {
      vm.allChores = chores;
    });

    vm.finish = function(chore) {
      var index = vm.chores.indexOf(chore),
        dayId = DateService.days.indexOf(vm.today);

      vm.chores.splice(index, 1);
      $http.post('/api/chores/daily/' + dayId + '/finish/' + chore.id);
    };

    vm.checkToggle = function(chore, day) {
      var index = vm.allChores[chore].indexOf(day);
      if (index < 0) vm.allChores[chore].push(day);
      else vm.allChores[chore].splice(index, 1);
    };
  }
}());
