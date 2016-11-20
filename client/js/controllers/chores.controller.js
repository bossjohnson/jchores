app.controller('ChoresCtrl', ChoresCtrl);

ChoresCtrl.$inject = ['$scope', '$http', 'ChoresService', 'DateService'];

function ChoresCtrl($scope, $http, ChoresService, DateService) {
    var vm = this;

    vm.today = DateService.today;
    ChoresService
        .then(function(chores) {
            vm.chores = chores;
        });
    console.log('ChoresService:', ChoresService);
}
