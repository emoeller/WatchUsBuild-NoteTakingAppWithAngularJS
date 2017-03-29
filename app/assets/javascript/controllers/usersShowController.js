angular.module('NoteWrangler').controller('UsersShowController', function(UserFactory, $scope, $routeParams){
  $scope.user = UserFactory.get({id: $routeParams.id});
});
