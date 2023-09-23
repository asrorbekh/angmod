let domain = window.location.hostname;
let apiUrl = 'https://api.uz';

if(domain.includes('.loc')){
    apiUrl = 'http://api.loc';
}

let MyApp = angular.module('MyApp', ['ui.router', 'ngRoute', 'LocalStorageModule', 'infinite-scroll', 'ngMaterial', 'ng']);
