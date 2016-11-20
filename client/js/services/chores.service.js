app.factory('ChoresService', ChoresService);

ChoresService.$inject = ['$http', 'DateService'];

function ChoresService($http, DateService) {

    return new Promise(function(resolve, reject) {
        $http.get('/api/chores/daily/' + DateService.today)
            .then(function(chores) {
                resolve(chores.data);
            });
    });
}
