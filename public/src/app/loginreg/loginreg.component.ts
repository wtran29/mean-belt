import { Component, OnInit } from '@angular/core';
import { LoginregService } from './../loginreg.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-loginreg',
  templateUrl: './loginreg.component.html',
  styleUrls: ['./loginreg.component.css']
})
export class LoginregComponent implements OnInit {
	
  	user: object = {name: ''};
  constructor(private _loginregService: LoginregService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
  }
  
  login(){
  	this._loginregService.loginUser(this.user)
  	.then((data)=>{
  		if(data.errors){
  			console.log(data.errors);
  		}else{
  			console.log("successfully got logged in", data);
  			this._router.navigate(['/dashboard']);
  		}
  	})
  }

}
