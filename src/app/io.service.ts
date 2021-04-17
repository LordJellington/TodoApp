import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { ErrorhandlerService } from './errorhandler.service';

@Injectable({
  providedIn: 'root'
})
export class IoService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorhandlerService
  ) { }

  get(url: string): Promise<any> {

    url = environment.apiBaseUrl + url;

    let p: Promise<any> = new Promise<any>((resolve, reject) => {

      this.http.get(url).toPromise()
        .then(response => {
          resolve(response);
        }, error => {
          this.errorHandlerService.add(error);
          reject(error);
        })
        .catch(error => {
          this.errorHandlerService.add(error);
          reject(error);
        });

    });

    return p;

  }

  post(url: string, content: any): Promise<any> {

    url = environment.apiBaseUrl + url;

    let p: Promise<any> = new Promise<any>((resolve, reject) => {

      this.http.post(url, content, this.httpOptions).toPromise()
        .then(response => {
          resolve(response);
        }, error => {
          this.errorHandlerService.add(error);
          reject(error);
        })
        .catch(error => {
          console.error(error);
        });    

      });

    return p;

  }

  put(url: string, content: any): Promise<any> {

    url = environment.apiBaseUrl + url;

    let p: Promise<any> = new Promise<any>((resolve, reject) => {

      this.http.put(url, content, this.httpOptions).toPromise()
        .then(response => {
          resolve(response);
        }, error => {
          this.errorHandlerService.add(error);
          reject(error);
        })
        .catch(error => {
          console.error(error);
        });    

      });

    return p;    

  }

  delete(url: string): Promise<any> {

    url = environment.apiBaseUrl + url;

    let p: Promise<any> = new Promise<any>((resolve, reject) => {

      this.http.delete(url, this.httpOptions).toPromise()
        .then(response => {
          resolve(response);
        }, error => {
          this.errorHandlerService.add(error);
          reject(error);
        })
        .catch(error => {
          console.error(error);
        });    

      });

    return p;       

  }

}
