var app = angular.module("MyApp", ["ngRoute"]);

app.config(["$routeProvider", function($routeProvider){
    
    $routeProvider
        .when("/", {
            templateUrl : "components/home/home.html",
            controller : "HomeConroller"
    })
        .when("/edit", {
            templateUrl : ""
    })
}]);