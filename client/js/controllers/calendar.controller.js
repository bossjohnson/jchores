(function() {
  app.controller('CalendarCtrl', CalendarCtrl);

  CalendarCtrl.$inject = ['$scope', 'DateService', '$mdDialog'];

  function CalendarCtrl($scope, DateService, $mdDialog) {
    var vm = this;

    vm.days = DateService.days;
    vm.monthName = DateService.monthName;
    vm.todaysDate = DateService.todaysDate;
    vm.daysInMonth = DateService.daysInMonth;
    vm.rows = DateService.calendarRows;

    vm.openDialog = function(day) {
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
        console.log(DateService.monthStartsOn);
        $scope.clicked = vm.days[day % 7 + DateService.monthStartsOn - 1];
        $scope.monthName = vm.monthName;
        $scope.date = day;
        console.log($scope);
      }
    };
  }
}());
