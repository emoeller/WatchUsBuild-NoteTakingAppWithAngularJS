angular.module('NoteWrangler').factory('User', function UserFactory($resource){
  return $resource('/users/:id', {id: "@id"}, {
    update: {
      method: "PUT"
    }
  });
});
