import { Angulartics2 } from '../../core/angulartics2';
export declare class Angulartics2Facebook {
    readonly angulartics2: Angulartics2;
    constructor(angulartics2: Angulartics2);
    eventTrack(action: string, properties: any): void;
}
