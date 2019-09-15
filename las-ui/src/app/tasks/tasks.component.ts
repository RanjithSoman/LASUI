import { Component, OnInit, Input } from '@angular/core';
import {Task} from '../task';
//import {Taskdetails} from '../taskdet';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

@Input() task:Task;

  constructor() { }

  ngOnInit() {
  }

}
