angular.module('googleMap', [])
    .controller('googleMapController', ['$scope', function ($scope) {

        // setup the input fields
        $scope.OriginLocation = {};
        $scope.DestinationLocation = {};

        $scope.bookingTableData = [
            { 
                id: 1,
                from: "Luton",
                to: "London",
                rate: 2.00,
                dateCreated: "2016-10-13 16:59",
                dateModified: null,
                completed: 0,
                deleted: 0
            },
            { 
                id: 2,
                from: "Milton Keynes",
                to: "Luton",
                rate: 2.00,
                dateCreated: "2016-05-09 10:00",
                dateModified: null,
                completed: 0,
                deleted: 0
            },
            { 
                id: 3,
                from: "Northampton",
                to: "Coventry",
                rate: 2.00,
                dateCreated: "2016-03-10 12:00",
                dateModified: null,
                completed: 0,
                deleted: 0
            }                  
        ];

        // set up some initial values for the test
        // you would normally hook up the other Google API's here
        // or use the endpoint I developed to communicate with the Google API
        // servers and get stuff like lat, lng data, places info, details

        // this object is mapped to the response that comes back from the Google API
        // but you don't have to follow this structure at the client side
        $scope.OriginLocation = {
            Name: "Milton Keynes"
        };

        $scope.DestinationLocation = {
            Name: "Luton"
        };

        $scope.injectedObject = {};

        $scope.callDirFunc = function() {
            $scope.injectedObject.directiveFunction();
        }

        $scope.mapRow = function(booking) {
            $scope.OriginLocation.Name = booking.from;
            $scope.DestinationLocation.Name = booking.to;
            $scope.callDirFunc();            
        }

    }]);