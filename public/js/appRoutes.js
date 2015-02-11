angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // nerds page that will use the NerdController
        .when('/repos', {
            templateUrl: 'views/repo.html',
            controller: 'RepoController'
        });

    $locationProvider.html5Mode(true);

}]);
