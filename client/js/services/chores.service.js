(function() {
  app.factory('ChoresService', ChoresService);

  ChoresService.$inject = ['$http', 'DateService', 'ChoresResource'];


  function ChoresService($http, DateService, ChoresResource) {
    var Chore = ChoresResource;

    var getChores = function() {
      return Chore.query(function(chores) {
        return chores;
      });
    };

    var getAllChores = function() {
      return Chore.all(function(chores) {
        return chores;
      });
    };

    var newChore = function () {
      return new Chore();
    };

    return {
      getChores: getChores,
      getAllChores: getAllChores,
      newChore: newChore
    };
  }
}());
