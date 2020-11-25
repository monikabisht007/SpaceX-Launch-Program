import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class CommonService {
    private url = 'https://api.spacexdata.com/v3/launches?limit=100';
    public data = new EventEmitter();
    constructor(private http: HttpClient) {}

    getRocketDetails(): Observable<[]> {
        return this.http.get<[]>(this.url);
    }

    getFilteredRocketDetails(filters: { launch_year?: any; launch_success?: any; land_success?: any; }): Observable<[]> {
        let params = new HttpParams();
        if (filters.launch_year) {
            params = params.append('launch_year', filters.launch_year);
        }
        if (filters.launch_success) {
            params = params.append('launch_success', filters.launch_success.toLowerCase());
        }
        if (filters.land_success) {
            params = params.append('land_success', filters.land_success.toLowerCase());
        }
        return this.http.get<[]>(this.url, {params});
    }

}
