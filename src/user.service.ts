import { User } from './user';
import { Serviceinterface } from './serviceinterface';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable()
export class UserService implements Serviceinterface {
    constructor(private http: Http) {
    }

    headers = new Headers({ 'Content-Type': 'application/json' });
    host: string = "http://pixka.me:3333";
    registerurl = '/rest/register';  // URL to web api
    loginurl = '/user/login';  // URL to web api
    infourl = '/rest/info';  // URL to web api

    setHost(nhost: string) {
        this.host = nhost;
    }

    register(user: User): any {
        return this.http.post(this.host + this.registerurl, JSON.stringify(user), { headers: this.headers });
    }


    login(user: User): any {
        return this.http.post(this.host + this.loginurl, JSON.stringify(user), { headers: this.headers });
    }

    isLogin() {

        let cc: string = localStorage.getItem("currentUser");
        if (cc != '')
            return true;

        return false;
    }

    info(token: string): any {

        let header1 = this.getTokenheader();
        return this.http.get(this.host + this.infourl, { headers: header1 });

    }

    loginname() {
        return localStorage.getItem("currentUser");
    }

    getTokenheader() {
        let token = localStorage.getItem("token");
        let header1 = new Headers({ 'Content-Type': 'application/json' });
        header1.append('Authorization', 'Bearer ' + token);

        return header1;
    }


    logout() {
        localStorage.setItem("token", '');
        localStorage.setItem("currentUser0", '');
    }

    get(id: number): any { }
    gets() { }
    add(obj: any) { }
    delete(id: number) { }
    search(value: string) { }
}