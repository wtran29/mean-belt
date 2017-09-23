import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginregService {

  constructor(private _http: Http) { }
  registerUser(user){
  	return this._http.post('/api/users', user).map(Response=>Response.json()).toPromise();
  }
  loginUser(user){
  	return this._http.post('/api/login', user).map(Response=>Response.json()).toPromise();
  }
  getCurrentUser(){
  	return this._http.get('/api/users/current').map(Response=>Response.json()).toPromise();
  }
  logoutUser(){
  	return this._http.get('/api/logout').map(Response=>Response.json()).toPromise();
  }
  createQues(ques){
  	return this._http.post('/api/create', ques).map(Response=>Response.json()).toPromise();
  }

  updateBike(ques){
  	return this._http.post('/api/update', ques).map(Response=>Response.json()).toPromise();
  }
  getQues(){
  	return this._http.get('/api/getques').map(Response=>Response.json()).toPromise();
  }
}
