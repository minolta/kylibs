import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class KSS {

    constructor(http: Http) {
        // ...
    }

    get()
    {
        return 'HI from KSS';
    }
}