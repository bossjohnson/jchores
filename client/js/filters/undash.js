(function() {
  app.filter('undash', undash);

  function undash() {
    return function(input) {
      return input.replace(/-/g, ' ');
    };
  }
}());
