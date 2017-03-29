angular.module('NoteWrangler').controller('NotesCreateController', function($scope, NoteFactory, $location){
  $scope.note = new NoteFactory();
  $scope.isSubmitting = false;

  $scope.saveNote = function(note){
    $scope.isSubmitting = true;
    note.$save().finally(function(){
      $scope.isSubmitting = false;
      $location.path('/notes');
    });
  }
});
