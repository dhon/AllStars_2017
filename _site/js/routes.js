angular.module('app.routes', ['ui.router', 'app.controllers', 'app.services'])
.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

        .state('home', {
            url: '/',
            templateUrl: '/Mafia_Stats_2017/home.html',
            controller: 'homeCtrl'
        })

        .state('kills', {
            url: '/kills/:id',
            templateUrl: '/Mafia_Stats_2017/kills.html',
            controller: 'killsCtrl'
        })

    $urlRouterProvider.otherwise('/')

});