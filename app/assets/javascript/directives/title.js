angular.module('NoteWrangler').directive('title', function($timeout){
  return function(scope, element, attrs){
    element.on('mouse', function(event){
      event.preventDefault();
    });

    $timeout(function(){
      $(element).tooltip();
    });

    scope.$on('$destroy', function(){
      $(element).tooltip('destroy');
    })
  };
});
