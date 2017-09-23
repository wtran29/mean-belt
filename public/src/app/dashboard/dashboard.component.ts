import { Component, OnInit } from '@angular/core';
import { LoginregService } from './../../loginreg.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  newQues= object = {name}
  ques: object[]=[];
  searchTerm: string = "";
  constructor(private _loginregService: LoginregService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
  }
  logout() {
		this._loginregService.logoutUser()
		.then(()=>{ this._router.navigate(['']);
		})
		.catch((err)=> { 
		console.log(err); 
		});
  }
  searchQues() {
  	this.ques.filter((ques)=>{
  		return ques.name.includes(this.searchTerm);
  	})
  }
  gotoQues(){
  	this._router.navigate(['new_question']);
  }
  
}
