(function() {
  app.factory('TasksResource', TasksResource);

  TasksResource.$inject = ['$resource'];

  function TasksResource($resource, DateService) {
    return $resource('/api/tasks');
  }
}());
