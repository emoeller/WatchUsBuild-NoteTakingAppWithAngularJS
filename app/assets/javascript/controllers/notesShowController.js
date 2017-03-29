angular.module('NoteWrangler').controller('NotesShowController', function($scope, NoteFactory, $routeParams, $location){
  $scope.note = NoteFactory.get({id: $routeParams.id});

  $scope.deleteNote = function(note){
    note.$remove().then(function(){
      $location.path('/notes');
    });
  }
  //console.log($scope.note);
});
