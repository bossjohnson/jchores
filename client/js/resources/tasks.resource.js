(function() {
  app.factory('TasksResource', TasksResource);

  TasksResource.$inject = ['$resource'];

  function TasksResource($resource, DateService) {
    var defaultParams = {
      taskId: '@_id'
    };
    return $resource('/api/tasks', defaultParams);
  }
}());
