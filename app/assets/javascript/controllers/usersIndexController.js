angular.module('NoteWrangler').controller('UsersIndexController', function(UserFactory, $scope){
  $scope.users = UserFactory.query();
});
