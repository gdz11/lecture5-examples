import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  constructor() {
    this.student = {
      name: '',
      address: {
        city: ''
      }
    };
  }

  student: Student;

  ngOnInit(): void {
  }

}



export interface Student {
  name: string;

  address: {
    city: string;
  }
}