import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginregComponent } from './loginreg/loginreg.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionComponent } from './question/question.component';
import { ShowComponent } from './show/show/component'; 
import { UpdateComponent } from './update/update/component';


const routes: Routes = [
	{
		path: '',
		component: LoginregComponent
	},
	{
		path:'dashboard',
		component: DashboardComponent,
		children: [
		{ path: 'new_question', component: QuestionComponent }]
		
	},
	
	{
		path:'question/:id',
		component: ShowComponent,
		children: [
			{ path: 'new_answer', component: UpdateComponent }
		]
	},
	

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
