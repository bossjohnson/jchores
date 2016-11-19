var app = angular.module('J-Chores', ['ui.router', 'ngMaterial']);

app.config(appConfig);

// appConfig.$inject = [$stateProvider, $mdThemingProvider];

function appConfig($stateProvider, $mdThemingProvider) {
    // $stateProvider
    $mdThemingProvider.theme('default')
        .primaryPalette('blue');
}

app.controller('CalendarCtrl', CalendarCtrl);

CalendarCtrl.$inject = ['$scope', 'DateService'];

function CalendarCtrl($scope, DateService) {
    var vm = this;

    vm.days = DateService.days;
    vm.todaysDate = DateService.todaysDate;
    vm.daysInMonth = DateService.daysInMonth;
    vm.rows = DateService.calendarRows;
}

app.controller('ChoresCtrl', ChoresCtrl);

ChoresCtrl.$inject = ['$scope', '$http', 'ChoresService', 'DateService'];

function ChoresCtrl($scope, $http, ChoresService, DateService) {
    var vm = this;

    vm.today = DateService.today;
    vm.chores = ChoresService[vm.today];
}

app.controller('HeaderCtrl', HeaderCtrl);

HeaderCtrl.$inject = ['$scope', 'DateService'];

function HeaderCtrl($scope, DateService) {
    var vm = this;

    vm.today = DateService.today;
    vm.todaysDate = DateService.todaysDate;
    vm.monthName = DateService.monthName;
}

app.filter('capitalize', capitalize);

function capitalize() {
    return function(input) {
        return input[0].toUpperCase() + input.slice(1);
    };
}

app.factory('ChoresService', ChoresService);

ChoresService.$inject = ['$http', 'DateService'];

function ChoresService($http, DateService) {

    var sunday = ['Cook dinner', 'Do the dishes', 'Mow the lawn'];
    var monday = ['Clean up dinner', 'Put laundry away', 'Do the dishes'];
    var tuesday = ['Cook dinner', 'Take out the trash'];
    var wednesday = ['Clean up dinner', 'Bring trash can in', 'Do the dishes'];
    var thursday = [];
    var friday = ['Clean up dinner', 'Do the dishes'];
    var saturday = [];

    var chores = {
        sunday: sunday,
        monday: monday,
        tuesday: tuesday,
        wednesday: wednesday,
        thursday: thursday,
        friday: friday,
        saturday: saturday
    };
    return chores;
}

app.factory('DateService', DateService);

function DateService() {

    var days = [
        'sunday',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday'
    ];

    var months = [
        'january',
        'february',
        'march',
        'april',
        'may',
        'june',
        'july',
        'august',
        'september',
        'october',
        'november',
        'december'
    ];

    var now = new Date();
    var today = days[now.getDay()];
    var todaysDate = now.getDate();
    var month = now.getMonth();
    var monthName = months[month];
    var year = now.getFullYear();
    var firstDayOfMonth = days[new Date(year, month).getDay()];
    var monthStartsOn = days.indexOf(firstDayOfMonth);
    var numberOfDays = new Date(year, month + 1, 0).getDate();

    var daysInMonth = [];
    for (var i = 1; i <= numberOfDays; i++) {
        daysInMonth.push(i);
    }

    var calendarRows = [];
    var row = [];
    for (i = 0; i < monthStartsOn; i++) {
        row.push(null);
    }
    for (i = 1; i <= numberOfDays; i++) {
        if (row.length < 7) {
            row.push(i);
        } else {
            calendarRows.push(row);
            row = [i];
        }
    }
    calendarRows.push(row);

    return {
        days: days,
        months: months,
        today: today,
        todaysDate: todaysDate,
        month: month,
        monthName: monthName,
        firstDayOfMonth: firstDayOfMonth,
        monthStartsOn: monthStartsOn,
        numberOfDays: numberOfDays,
        daysInMonth: daysInMonth,
        calendarRows: calendarRows
    };
}

