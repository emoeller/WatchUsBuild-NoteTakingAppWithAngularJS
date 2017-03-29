angular.module('NoteWrangler').factory('UserFactory', function($resource){
  return $resource('/users/:id', {id: "@id"}, {
    update: {
      method: "PUT"
    }
  });
});
