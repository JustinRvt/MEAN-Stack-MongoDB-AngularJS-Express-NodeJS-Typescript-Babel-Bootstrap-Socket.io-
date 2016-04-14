'use strict';

angular.module('justinFolioApp.auth', [
  'justinFolioApp.constants',
  'justinFolioApp.util',
  'ngCookies',
  'ngRoute'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
