angular.module('starter.services', ['ngResource'])


.factory('LocalService', function ($resource, apiUrl) {
  return $resource(apiUrl.RETORNA_LOCAL, {}, {
    show: { method: 'GET' }
  })
});