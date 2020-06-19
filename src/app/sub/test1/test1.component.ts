import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css'],
  providers:  [ TestService ]
})
export class Test1Component implements OnInit {

  constructor(private testService: TestService)
	{

	}

  ngOnInit(): void {
  }

}
