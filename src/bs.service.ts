import { Hostconfig } from './hostconfig';
import { UserService } from './user.service';
import { Serviceinterface } from './serviceinterface';
import { Observable } from "rxjs/Observable";
import { Bsi } from './bs.interface';
import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions, RequestMethod, Request } from '@angular/http';

import * as g from "./global";

@Injectable()
export class BS implements Serviceinterface {
    host = g.host;
    urllist = '/rest/default/lists';
    urladd = '/rest/default/add';
    urlsearch = '/rest/default/search';
    urlget = '/rest/default/get';
    urldelete = '/rest/default/delete';

    //constructor(){};
    constructor(private ht: Http, private us: UserService) {
        //this.host = hostconfig.host;
        this.us.setHost(this.host);
    }
    setHost(nh: string) {
        this.host = nh;
    }
    gets() {
        let h = this.us.getTokenheader();
        return this.ht.get(this.urllist, { headers: h }).map((res: Response) => res.json());
    }

    add(value: any) {
        console.log("add value" + value);
        console.log('ADD URL:' + this.urladd);
        let h = this.us.getTokenheader();
        return this.ht.post(this.urladd, JSON.stringify(value), { headers: h }).map((res: Response) => res.json());
    }
    get(id: number): any {
        let h = this.us.getTokenheader();
        console.log('GET URL:' + this.urlget + '/' + id);
        return this.ht.get(this.urlget + '/' + id, { headers: h }).map((res: Response) => res.json());
    }
    search(search: string) {
        let s = {
            value: search,
            page: 0,
            limit: 50
        };
        let tk = this.us.getTokenheader();
        return this.ht.post(this.urlsearch, s, tk).map(res => res.json());

    }
    delete(id: number) {
        let du = this.urldelete + "/" + id;
        let h = this.us.getTokenheader();
        return this.ht.get(du, { headers: h }).map((res: Response) => res.json());

   //     return this.ht.post(du, { headers: h }).map((res: Response) => res.json());
    }
    g(url: string) {
        let h = this.us.getTokenheader();
        return this.ht.get(this.urlget, { headers: h }).map((res: Response) => res.json());

    }
    handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);

        return errMsg;
    }

}