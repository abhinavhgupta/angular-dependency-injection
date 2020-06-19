import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { TestService } from './test.service';



@NgModule({
  declarations: [],
  imports: [RouterModule.forChild([
    { path: 'test1', component: Test1Component },
    { path: 'test2', component: Test2Component },
    { path: 'test3', component: Test2Component }
  ]),
    CommonModule
  ],
  // providers:
	// [
	// 	TestService
	// ],
})
export class SubModule { }
