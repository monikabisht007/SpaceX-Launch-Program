import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable()
export class CommonService {
    private url = '';
    public data = new EventEmitter();
    constructor(private http: HttpClient) {}

    getAuthorWithTitles(f): Observable<[]> {
        this.url = `https://poetrydb.org/author,title/${f.form.value.author};${f.form.value.title}`;
        return this.http.get<[]>(this.url);
    }

    getAuthors(): Observable<[]> {
        this.url = 'https://poetrydb.org/author';
        return this.http.get<[]>(this.url);
    }

    getTitles(title): Observable<[]> {
        this.url = `https://poetrydb.org/author/${title}/title`;
        return this.http.get<[]>(this.url);
    }



}
