var app = angular.module('freddieApp', ['ui.router','ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'app/Home/home.html'
        })
     .state('Search', {
            url: '/Search',
            templateUrl: 'app/Search/SearchResult.html'
        });
        
        
        
        
});