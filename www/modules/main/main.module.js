/**
 * Created by vl on 31.3.15.
 */
(function(angular) {
    'use strict';

    angular.module('app.main', ['app.main.matches', 'app.main.settings', 'app.main.swiper'])
        .config(appConfig);

    appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function appConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            // setup an abstract state for the tabs directive
            .state('main', {
                url: "/main",
                abstract: true,
                templateUrl: "modules/main/mainLayout.html"
            })
    }

})(angular);