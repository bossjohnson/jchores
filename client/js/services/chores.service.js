(function() {
  app.factory('ChoresService', ChoresService);

  ChoresService.$inject = ['$http', 'DateService'];

  function ChoresService($http, DateService) {

    var getChores = function() {
      return $http.get('/api/chores/daily/' + DateService.today);
    };

    var getAllChores = function() {
      return $http.get('/api/chores/all')
        .then(function(chores) {
          var choresObj = {};

          for (var i = 0; i < chores.data.length; i++) {
            var chore = chores.data[i],
              choreName = chore.chore;

            if (!choresObj[choreName]) choresObj[choreName] = [];

            if (choresObj[choreName].indexOf(chore.day) < 0) {
              choresObj[choreName].push(chore.day);
            }
          }
          return choresObj;
        });
    };

    return {
      getChores: getChores,
      getAllChores: getAllChores,
      allChores: getAllChores()
    };
  }
}());
