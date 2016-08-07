
/*
Notes
tudo que for carregar algo do banco vai ter o prefixo get
*/
angular.module('starter.controllers', [])


    .controller('HomeCtrl', function($scope, $http, $cordovaGeolocation, $ionicLoading ) {
        $ionicLoading.show();

        var localization = {timeout: 10000, enableHighAccuracy: false};""
        $cordovaGeolocation
            .getCurrentPosition(localization)

            .then(function (position) {
                var lat  = position.coords.latitude
                var long = position.coords.longitude
                // console.log(lat + '   ' + long)
            }, function(err) {
                console.log(err)
            });
//Carregar os locais proximos apartir das coordenadas cadastradas no map e peganod a localização atual pelo gps do equipamento
        var getLocais = function(){
            $cordovaGeolocation.getCurrentPosition(localization)
                .then(function (position) {
                    var lat  = position.coords.latitude
                    var long = position.coords.longitude
                    console.log(lat + ' ' + long)
                    $http.get("http://localhost:8000/location/"+lat+','+long+','+'5').success(function (data) {
                        $scope.dados={};
                        $scope.dados=data;
                        console.log(data);
                       

                    }).error(function (data, status) {
                        $scope.message = "Houve um problema ao carregar os dados: " + status;
                    })

                },function(err) {
                    $scope.message = "Não conseguimos carregar sua localização: " + (err);
            });

        };
      var getDistancia = function () {
          console.log(longIni);

      } ;

        getLocais();
getDistancia();

    })



    .controller('LocalDetailCtrl', function($scope, $state, $stateParams, LocalService, $cordovaGeolocation ) {
        $scope.dados = LocalService.show({id: $stateParams.id});

        $scope.ratingsObject = {
            iconOn: 'ion-ios-star',    //Optional
            iconOff: 'ion-ios-star-outline',   //Optional
            iconOnColor: 'rgb(200, 200, 100)',  //Optional
            iconOffColor:  'rgb(200, 100, 100)',    //Optional
            rating:  2, //Optional
            minRating:1,    //Optional
            readOnly: true, //Optional
            callback: function(rating) {    //Mandatory
                $scope.ratingsCallback(rating);
            }
        };

        $scope.ratingsCallback = function(rating) {
            console.log('Selected rating is : ', rating);
        };


    })

    .controller('AccountCtrl', function($scope) {
        $scope.settings = {
            enableFriends: true
        };
    });
