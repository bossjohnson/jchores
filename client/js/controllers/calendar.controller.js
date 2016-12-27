(function() {
  app.controller('CalendarCtrl', CalendarCtrl);

  CalendarCtrl.$inject = ['$scope', 'DateService', '$mdDialog', 'TasksResource'];

  function CalendarCtrl($scope, DateService, $mdDialog, TasksResource) {
    var vm = this,
      Task = TasksResource;

    vm.days = DateService.days;
    vm.monthName = DateService.monthName;
    vm.todaysDate = DateService.todaysDate;
    vm.daysInMonth = DateService.daysInMonth;
    vm.rows = DateService.calendarRows;
    vm.tasks = Task.query();

    vm.openDialog = function(day, row) {
      var clickedDay = document.querySelectorAll('.calendar-day')[day - 1];

      $mdDialog.show({
        templateUrl: 'views/partials/add_calendar_task.html',
        controller: dialogController,
        clickOutsideToClose: true,
        openFrom: clickedDay,
        closeTo: clickedDay
      });

      dialogController.$inject = ['$scope', '$mdDialog'];

      function dialogController($scope, $mdDialog) {
        var index = row.indexOf(day);
        $scope.clicked = vm.days[index];
        $scope.monthName = vm.monthName;
        $scope.date = day;
        $scope._date = DateService.daysInMonth[day - 1];
        $scope.task = {};

        $scope.addTask = function() {
          var task = new Task();
          task.name = $scope.task.name;
          task.date = $scope._date;
          task.$save();
        };
      }
    };
  }
}());
