angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
}).
factory('Stores', function(){
  var stores = [
    {id: 0, name : 'Kroser Carrasco', description: 'Herramientas, tornillos, martillos', hour: '08:00 - 20:00'},
    {id: 1, name : 'Tienda Inglesa', description: 'Lo bueno por menos, en Tienda Inglesa', hour: '09:00 - 22:00'},
    {id: 2, name : 'Petrobras', description: 'Estacion de servicio 24 horas', hour: '00:00 - 23:59'},
    {id: 3, name : 'Via Sono', description: 'Colchones, sommiers, muebles y mucho mas', hour: '10:00 - 19:00'},
    {id: 4, name : 'Mc. Donalds', description: 'Las mejores hamburguesas con queso', hour: '08:00 - 20:00'}
  ];;

  return {
    all: function() {
      return stores;
    },
    get: function(storeId) {
      // Simple index lookup
      return stores[storeId];
    }
  }
});
