import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
	newQues: object ={ Question: '', Description: ''}
  constructor() { }

  ngOnInit() {
  },
  addQues() {
  	this._loginregService.createQues(this.newQues)
  	.then((data)=>{
  		if(data.errors){
  			console.log(data.errors);
  		}else{
  			console.log('added bike', data);
  			this._router.navigate(['dashboard'])
  			this.getAllQues()
  		}
  		
  	})
}
