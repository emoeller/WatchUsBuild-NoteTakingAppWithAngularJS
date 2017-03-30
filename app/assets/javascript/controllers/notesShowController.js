angular.module('NoteWrangler').controller('NotesShowController', function($scope, Note, $routeParams, $location){
  $scope.note = Note.get({id: $routeParams.id});

  $scope.deleteNote = function(note){
    note.$remove().then(function(){
      $location.path('/notes');
    });
  }
  //console.log($scope.note);
});
