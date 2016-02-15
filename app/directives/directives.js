app.directive('myInput', function() {
  return {
    restrict: 'E',
    template: "<label>RAFAEL LONTRA User:<input type='text' ng-model='username'></label><button ng-click='getGitHubUser(username)'>GO</button>"
  };
});