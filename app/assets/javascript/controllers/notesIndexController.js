angular.module('NoteWrangler').controller('NotesIndexController', function(NoteFactory, $scope){
  $scope.notes = NoteFactory.query();

  //console.log($scope.notes);
});
