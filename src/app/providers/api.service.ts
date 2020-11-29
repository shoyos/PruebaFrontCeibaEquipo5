import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private serverURL = environment.serverUrl;
 
 private  httpOptions = {
  headers: { 'Content-Type': 'application/json' },
  credentials: 'include'

};
  constructor(private http: HttpClient) { }


  
  public apiPostModel(path:string, model:any): Observable<any> {
    return this.http.post<any>(`${this.serverURL}${path}`,model,this.httpOptions);
  }

  public apigetModel(path:string): Observable<any> {
    return this.http.get<any>(`${this.serverURL}${path}`, this.httpOptions);
  }

  public apiDeleteModel(path:string): Observable<any> {
    return this.http.delete<any>(`${this.serverURL}${path}`, this.httpOptions);
  }
}