import { User } from './user';
import { Serviceinterface } from './serviceinterface';
import { Http, Headers } from '@angular/http';
export declare class UserService implements Serviceinterface {
    private http;
    constructor(http: Http);
    headers: Headers;
    host: string;
    registerurl: string;
    loginurl: string;
    infourl: string;
    setHost(nhost: string): void;
    register(user: User): any;
    login(user: User): any;
    isLogin(): boolean;
    info(token: string): any;
    loginname(): string;
    getTokenheader(): Headers;
    logout(): void;
    get(id: number): any;
    gets(): void;
    add(obj: any): void;
    delete(id: number): void;
    search(value: string): void;
}
