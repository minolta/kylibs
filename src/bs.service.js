"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const user_service_1 = require("./user.service");
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
const g = require("./global");
let BS = class BS {
    //constructor(){};
    constructor(ht, us) {
        this.ht = ht;
        this.us = us;
        this.host = g.host;
        this.urllist = '/rest/default/lists';
        this.urladd = '/rest/default/add';
        this.urlsearch = '/rest/default/search';
        this.urlget = '/rest/default/get';
        this.urldelete = '/rest/default/delete';
        //this.host = hostconfig.host;
        this.us.setHost(this.host);
    }
    setHost(nh) {
        this.host = nh;
    }
    gets() {
        let h = this.us.getTokenheader();
        return this.ht.get(this.urllist, { headers: h }).map((res) => res.json());
    }
    add(value) {
        console.log("add value" + value);
        console.log('ADD URL:' + this.urladd);
        let h = this.us.getTokenheader();
        return this.ht.post(this.urladd, JSON.stringify(value), { headers: h }).map((res) => res.json());
    }
    get(id) {
        let h = this.us.getTokenheader();
        console.log('GET URL:' + this.urlget + '/' + id);
        return this.ht.get(this.urlget + '/' + id, { headers: h }).map((res) => res.json());
    }
    search(search) {
        let s = {
            value: search,
            page: 0,
            limit: 50
        };
        let tk = this.us.getTokenheader();
        return this.ht.post(this.urlsearch, s, tk).map(res => res.json());
    }
    delete(id) {
        let du = this.urldelete + "/" + id;
        let h = this.us.getTokenheader();
        return this.ht.post(du, { headers: h }).map((res) => res.json());
    }
    g(url) {
        let h = this.us.getTokenheader();
        return this.ht.get(this.urlget, { headers: h }).map((res) => res.json());
    }
    handleError(error) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg;
        if (error instanceof http_1.Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return errMsg;
    }
};
BS = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, user_service_1.UserService])
], BS);
exports.BS = BS;
//# sourceMappingURL=bs.service.js.map