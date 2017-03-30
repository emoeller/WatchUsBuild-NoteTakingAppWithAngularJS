angular.module('NoteWrangler').controller('NotesCreateController', function($scope, Note, Category, User, $location, $resource){
  $scope.note = new Note();
  $scope.isSubmitting = false;

  $scope.users = User.query();
  $scope.categories = Category.query();

  $scope.saveNote = function(note){
    $scope.isSubmitting = true;
    note.$save().finally(function(){
      $scope.isSubmitting = false;
      $location.path('/notes');
    });
  }
});
