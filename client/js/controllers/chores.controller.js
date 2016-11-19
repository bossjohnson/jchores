app.controller('ChoresCtrl', ChoresCtrl);

ChoresCtrl.$inject = ['$scope', '$http', 'ChoresService', 'DateService'];

function ChoresCtrl($scope, $http, ChoresService, DateService) {
    var vm = this;

    vm.today = DateService.today;
    vm.chores = ChoresService[vm.today];
}
