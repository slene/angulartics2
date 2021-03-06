"use strict";
var core_1 = require('@angular/core');
var ReplaySubject_1 = require('rxjs/ReplaySubject');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
require('rxjs/add/operator/filter');
var Angulartics2 = (function () {
    function Angulartics2(location, router) {
        this.settings = {
            pageTracking: {
                autoTrackVirtualPages: true,
                basePath: '',
                excludedRoutes: []
            },
            eventTracking: {},
            developerMode: false
        };
        this.pageTrack = new ReplaySubject_1.ReplaySubject();
        this.eventTrack = new ReplaySubject_1.ReplaySubject();
        this.exceptionTrack = new ReplaySubject_1.ReplaySubject();
        this.setAlias = new ReplaySubject_1.ReplaySubject();
        this.setUsername = new ReplaySubject_1.ReplaySubject();
        this.setUserProperties = new ReplaySubject_1.ReplaySubject();
        this.setUserPropertiesOnce = new ReplaySubject_1.ReplaySubject();
        this.setSuperProperties = new ReplaySubject_1.ReplaySubject();
        this.setSuperPropertiesOnce = new ReplaySubject_1.ReplaySubject();
        this.userTimings = new ReplaySubject_1.ReplaySubject();
        this.trackLocation(location, router);
    }
    Angulartics2.prototype.trackLocation = function (location, router) {
        var _this = this;
        router.events
            .filter(function (event) { return event instanceof router_1.NavigationEnd; })
            .subscribe(function (event) {
            if (!_this.settings.developerMode) {
                _this.trackUrlChange(event.urlAfterRedirects, location);
            }
        });
    };
    Angulartics2.prototype.virtualPageviews = function (value) {
        this.settings.pageTracking.autoTrackVirtualPages = value;
    };
    Angulartics2.prototype.excludeRoutes = function (routes) {
        this.settings.pageTracking.excludedRoutes = routes;
    };
    Angulartics2.prototype.firstPageview = function (value) {
        this.settings.pageTracking.autoTrackFirstPage = value;
    };
    Angulartics2.prototype.withBase = function (value) {
        this.settings.pageTracking.basePath = (value);
    };
    Angulartics2.prototype.developerMode = function (value) {
        this.settings.developerMode = value;
    };
    Angulartics2.prototype.trackUrlChange = function (url, location) {
        if (!this.settings.developerMode) {
            if (this.settings.pageTracking.autoTrackVirtualPages && !this.matchesExcludedRoute(url)) {
                this.pageTrack.next({
                    path: this.settings.pageTracking.basePath.length ? this.settings.pageTracking.basePath + url : location.prepareExternalUrl(url),
                    location: location
                });
            }
        }
    };
    Angulartics2.prototype.matchesExcludedRoute = function (url) {
        for (var _i = 0, _a = this.settings.pageTracking.excludedRoutes; _i < _a.length; _i++) {
            var excludedRoute = _a[_i];
            if ((excludedRoute instanceof RegExp && excludedRoute.test(url)) || url.indexOf(excludedRoute) > -1) {
                return true;
            }
        }
        return false;
    };
    Angulartics2.decorators = [
        { type: core_1.Injectable },
    ];
    Angulartics2.ctorParameters = [
        { type: common_1.Location, },
        { type: router_1.Router, },
    ];
    return Angulartics2;
}());
exports.Angulartics2 = Angulartics2;
