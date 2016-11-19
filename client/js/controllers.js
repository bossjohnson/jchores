app.controller('ChoresCtrl', ChoresCtrl);

ChoresCtrl.$inject = ['$scope', 'ChoresService', 'Days', '$http'];

function ChoresCtrl($scope, ChoresService, Days, $http) {
    var vm = this;

    vm.today = Days[new Date().getDay()];
    vm.chores = ChoresService[vm.today];
}


app.controller('HeaderCtrl', HeaderCtrl);

HeaderCtrl.$inject = ['$scope', 'Days', 'DateService'];

function HeaderCtrl($scope, Days, DateService) {
    var vm = this;

    vm.today = capitalize(DateService.today);
    vm.todaysDate = DateService.todaysDate;
    vm.month = capitalize(DateService.month);
}

app.controller('CalendarCtrl', CalendarCtrl);

CalendarCtrl.$inject = ['$scope', 'Days', 'DateService'];

function CalendarCtrl($scope, Days, DateService) {
    var vm = this;

    vm.days = Days;
    var now = new Date();
    // vm.today = Days[now.getDay()];
    vm.dateToday = now.getDate();

    var month = now.getMonth();
    var year = now.getFullYear();

    var numberOfDays = new Date(year, month + 1, 0).getDate();
    vm.daysInMonth = [];
    for (var i = 1; i <= numberOfDays; i++) {
        vm.daysInMonth.push(i);
    }

    var firstDayOfMonth = Days[new Date(year, month).getDay()];
    var monthStartsOn = Days.indexOf(firstDayOfMonth);

    vm.rows = [];

    var row = [];

    for (var i = 0; i < monthStartsOn; i++) {
        row.push(null);
    }

    for (var i = 1; i <= numberOfDays; i++) {
        if (row.length < 7) {
            row.push(i);
        } else {
            vm.rows.push(row);
            row = [i]
        }
    }
    vm.rows.push(row);
}

function capitalize(input) {
    return input[0].toUpperCase() + input.slice(1);
}
