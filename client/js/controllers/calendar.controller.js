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
    vm.taskDates = [];

    vm.tasks.$promise.then(function() {
      for (var i = 0; i < vm.tasks.length; i++) {
        var task = vm.tasks[i],
          taskDate = new Date(task.date).getDate();
        vm.taskDates.push(taskDate);
      }
    });

    vm.openDialog = function(day, row, tasks) {
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
        $scope.tasks = [];

        for (var i = 0; i < tasks.length; i++) {
          var task = tasks[i],
            taskDate = new Date(task.date).getDate();
          if (taskDate === day) {
            $scope.tasks.push(task);
          }
        }

        $scope.addTask = function() {
          var task = new Task();
          task.name = $scope.task.name;
          task.date = $scope._date;
          vm.taskDates.push(new Date(task.date).getDate());
          vm.tasks.push(task);
          $scope.tasks.push(task);
          $scope.task = {};
          task.$save().then(function(saved) {
            task._id = saved._id;
          });
        };

        $scope.deleteTask = function(task) {
          task.$delete();
          var index = $scope.tasks.indexOf(task);
          $scope.tasks.splice(index, 1);
          index = vm.taskDates.indexOf(new Date(task.date).getDate());
          vm.taskDates.splice(index, 1);
          index = vm.tasks.indexOf(task);
          vm.tasks.splice(index, 1);
        };
      }
    };
  }
}());
