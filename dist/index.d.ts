import { ModuleWithProviders } from '@angular/core';
import { Angulartics2 } from './core/angulartics2';
export * from './core/angulartics2';
export * from './core/angulartics2On';
export * from './providers';
declare var _default: {
    providers: typeof Angulartics2[];
};
export default _default;
export declare class Angulartics2Module {
    constructor(parentModule: Angulartics2Module);
    static forRoot(): ModuleWithProviders;
}
