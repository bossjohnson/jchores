(function() {
  app.factory('TasksResource', TasksResource);

  TasksResource.$inject = ['$resource', 'DateService'];

  function TasksResource($resource, DateService) {
    // var actions = {
    //     all: {
    //       url: '/api/chores/all',
    //       method: 'get',
    //       isArray: true
    //     }
    //   },
    //   defaultParams = {
    //     day: DateService.today,
    //     choreId: '@_id'
    //   };

    // return $resource('/api/tasks', defaultParams, actions);
    return $resource('/api/tasks');
  }
}());
