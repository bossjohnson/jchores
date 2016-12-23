(function() {
  app.factory('ChoresResource', ChoresResource);

  ChoresResource.$inject = ['$resource', 'DateService'];

  function ChoresResource($resource, DateService) {
    var actions = {
        all: {
          url: '/api/chores/all',
          method: 'get',
          isArray: true
        }
      },
      defaultParams = {
        day: DateService.today,
        choreId: '@_id'
      };

    return $resource('/api/chores', defaultParams, actions);
  }
}());
