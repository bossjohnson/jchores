app.controller('HeaderCtrl', HeaderCtrl);

HeaderCtrl.$inject = ['$scope', 'DateService'];

function HeaderCtrl($scope, DateService) {
    var vm = this;

    vm.today = DateService.today;
    vm.todaysDate = DateService.todaysDate;
    vm.monthName = DateService.monthName;
}
