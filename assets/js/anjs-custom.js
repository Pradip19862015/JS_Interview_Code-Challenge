// Module.
var myapp = angular.module('myapp', []);

// Custom Filter: Only first letter of name in Caps.
myapp.filter('capitlize', function () {
    return function (input) {
        return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});

// Controller.
myapp.controller('myCtrl', ['$scope', '$http', '$log', function ($scope, $http, $log) {
    // Title
    $scope.message = "The User Story";
    $scope.sortType     = 'id'; 
    $scope.sortReverse  = false;      
    // RESTfull github API
    $http({
        method: 'get',
        url: 'http://jsonplaceholder.typicode.com/posts'
    }).then(function (response) {
        $scope.allUsers = response.data;
        // $log.info(response);
    }, function (reason) {
        $scope.displayError = reason.data;
        // $log.info(reason);
    });  
                            
}])
