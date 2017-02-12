import { UserService } from './user.service';
import { Serviceinterface } from './serviceinterface';
import { Observable } from "rxjs/Observable";
import { Http, Response } from '@angular/http';
export declare class BS implements Serviceinterface {
    private ht;
    private us;
    host: string;
    urllist: string;
    urladd: string;
    urlsearch: string;
    urlget: string;
    urldelete: string;
    constructor(ht: Http, us: UserService);
    setHost(nh: string): void;
    gets(): Observable<any>;
    add(value: any): Observable<any>;
    get(id: number): any;
    search(search: string): Observable<any>;
    delete(id: number): Observable<any>;
    g(url: string): Observable<any>;
    handleError(error: Response | any): string;
}
