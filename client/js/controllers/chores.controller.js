(function() {
  app.controller('ChoresCtrl', ChoresCtrl);

  ChoresCtrl.$inject = ['$scope', '$http', 'ChoresService', 'DateService', '$resource'];

  function ChoresCtrl($scope, $http, ChoresService, DateService, $resource) {
    var vm = this;

    vm.view = {
      addNewChore: false
    };
    vm.chores = [];

    vm.days = DateService.days;
    vm.today = DateService.today;
    vm.todaysDate = DateService.todaysDate;
    vm.monthName = DateService.monthName;


    vm.allChores = ChoresService.getAllChores();

    vm.finish = function(chore) {
      var index = vm.chores.indexOf(chore);
      vm.chores.splice(index, 1);
      chore.finished = new Date();
      chore.$save();
    };

    vm.checkToggle = function(chore, day) {
      var index = chore.days.indexOf(day);

      if (index < 0) {
        chore.days.push(day);
      } else {
        chore.days.splice(index, 1);
      }
      chore.$save();
    };

    vm.addNew = function() {
      var chore = ChoresService.newChore();
      chore.$save();
      vm.allChores.push(chore);
    };

    vm.deleteChore = function(chore) {
      var index = vm.allChores.indexOf(chore);
      vm.allChores.splice(index, 1);
      chore.$delete();
    };
  }
}());
