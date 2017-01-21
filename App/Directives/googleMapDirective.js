angular.module("googelMapDirective", [])
    .directive("map", function () {
        return {
            restrict: 'ACE',
            templateUrl: 'App/Directives/googleMapView.html',
            scope:
            {
                originLocation: "=",
                destinationLocation: "=",
                mapThisFn: "="
            },
            // replace: true,
            link: function ($scope, element, attrs) {
                var directionsDisplay;
                var directionsService;

                var map = new google.maps.Map(document.getElementById('map'),
                    mapOptions);

                // set the map options
                var mapOptions = {
                    center: new google.maps.LatLng(50, 2),
                    zoom: 4,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    scrollwheel: false
                };

                // you can set up more stuff here like markers, routes etc
                // prior to initialising the map

                // initialise the map
                $scope.initMap = function () {
                    directionsService = new google.maps.DirectionsService();
                    directionsDisplay = new google.maps.DirectionsRenderer();
                    if (map === void 0) {
                        map = new google.maps.Map(element[0], mapOptions);
                    }
                }

                // calculate the route based on the inputs
                $scope.CalculateRoute = function () {
                    var request = {
                        origin: $scope.originLocation.Name,
                        destination: $scope.destinationLocation.Name,
                        unitSystem: google.maps.UnitSystem.IMPERIAL,
                        travelMode: google.maps.TravelMode.DRIVING
                    };
                    directionsService.route(request, function (response, status) {
                        if (status == google.maps.DirectionsStatus.OK) {
                            directionsDisplay.setDirections(response);
                            directionsDisplay.setMap(map);
                        }
                    });
                }

                angular.extend($scope.mapThisFn, {
                    directiveFunction: function () {
                        $scope.CalculateRoute();
                    }
                });

                // render the map
                $scope.initMap();
                $scope.CalculateRoute();

            }
        };
    });