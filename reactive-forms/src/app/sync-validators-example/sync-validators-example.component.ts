import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sync-validators-example',
  templateUrl: './sync-validators-example.component.html',
  styleUrls: ['./sync-validators-example.component.css']
})
export class SyncValidatorsExampleComponent implements OnInit {

  constructor() { }

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    lastname: new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ])

  });

  get name(){
    return this.form.get('name');
  }

  get lastname() {
    return this.form.get('lastname');
  }

  ngOnInit(): void {
  }

}
