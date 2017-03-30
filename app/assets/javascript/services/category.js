angular.module('NoteWrangler').factory('Category', function CategoryFactory($resource){
  return $resource('/categories/:id');
});
