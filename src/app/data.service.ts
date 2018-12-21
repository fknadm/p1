import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getProjects() {
    return this.http.get('https://my-json-server.typicode.com/fknadm/p1/projects')
}

}