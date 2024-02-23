import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { product } from '../Model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient : HttpClient) { }

private apiURL = 'http://localhost:8080/pro/add';

httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json',
  }),
};


addData(user: product) {
  console.log('Call from service  ', user.proName);
  return this.httpClient.post(this.apiURL, JSON.stringify(user));
}

getAll() {
  console.log('Call from service  ');
  return this.httpClient.get(this.apiURL);
}

getByID(id: any) {
  console.log('Call from service');
  return this.httpClient.get(this.apiURL + '/' + id);
}

deleteByID(id: any) {
  console.log('Delete from service ');

  return this.httpClient.delete(this.apiURL + '/' + id);
}

updateData(user: product) {
  return this.httpClient.put(this.apiURL + '/' + user.productID, user);
}

// ----------

private messagesource = new BehaviorSubject('false');
currentMessage = this.messagesource.asObservable();

changeMessage(message: string) {
  this.messagesource.next(message);
}

}
