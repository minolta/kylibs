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
const http_1 = require("@angular/http");
const core_1 = require("@angular/core");
let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.host = "http://pixka.me:3333";
        this.registerurl = '/rest/register'; // URL to web api
        this.loginurl = '/user/login'; // URL to web api
        this.infourl = '/rest/info'; // URL to web api
    }
    setHost(nhost) {
        this.host = nhost;
    }
    register(user) {
        return this.http.post(this.host + this.registerurl, JSON.stringify(user), { headers: this.headers });
    }
    login(user) {
        return this.http.post(this.host + this.loginurl, JSON.stringify(user), { headers: this.headers });
    }
    isLogin() {
        let cc = localStorage.getItem("currentUser");
        if (cc != '')
            return true;
        return false;
    }
    info(token) {
        let header1 = this.getTokenheader();
        return this.http.get(this.host + this.infourl, { headers: header1 });
    }
    loginname() {
        return localStorage.getItem("currentUser");
    }
    getTokenheader() {
        let token = localStorage.getItem("token");
        let header1 = new http_1.Headers({ 'Content-Type': 'application/json' });
        header1.append('Authorization', 'Bearer ' + token);
        return header1;
    }
    logout() {
        localStorage.setItem("token", '');
        localStorage.setItem("currentUser0", '');
    }
    get(id) { }
    gets() { }
    add(obj) { }
    delete(id) { }
    search(value) { }
};
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map