app.controller('CalendarCtrl', CalendarCtrl);

CalendarCtrl.$inject = ['$scope', 'DateService'];

function CalendarCtrl($scope, DateService) {
    var vm = this;

    vm.days = DateService.days;
    vm.todaysDate = DateService.todaysDate;
    vm.daysInMonth = DateService.daysInMonth;
    vm.rows = DateService.calendarRows;
}
