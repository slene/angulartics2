"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = require('@angular/core');
var angulartics2_1 = require('./core/angulartics2');
var angulartics2On_1 = require('./core/angulartics2On');
__export(require('./core/angulartics2'));
__export(require('./core/angulartics2On'));
__export(require('./providers'));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    providers: [angulartics2_1.Angulartics2]
};
var Angulartics2Module = (function () {
    function Angulartics2Module(parentModule) {
        if (parentModule) {
            throw new Error('Angulartics2Module already loaded; Import in root module only.');
        }
    }
    Angulartics2Module.forRoot = function () {
        return {
            ngModule: Angulartics2Module,
            providers: [angulartics2_1.Angulartics2]
        };
    };
    Angulartics2Module.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [angulartics2On_1.Angulartics2On],
                    exports: [angulartics2On_1.Angulartics2On]
                },] },
    ];
    Angulartics2Module.ctorParameters = [
        { type: Angulartics2Module, decorators: [{ type: core_1.Optional }, { type: core_1.SkipSelf },] },
    ];
    return Angulartics2Module;
}());
exports.Angulartics2Module = Angulartics2Module;
