(function() {
  app.filter('capitalize', capitalize);

  function capitalize() {
    return function(input) {
      return input[0].toUpperCase() + input.slice(1);
    };
  }
}());
