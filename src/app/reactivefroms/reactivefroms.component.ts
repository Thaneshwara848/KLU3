import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactivefroms',
  templateUrl: './reactivefroms.component.html',
  styleUrls: ['./reactivefroms.component.css']
})
export class ReactivefromsComponent implements OnInit {
  student:any;

  ngOnInit(): void {
    this.student=new FormGroup({
      firstname:new FormControl("",Validators.compose([

      ]))
    })
  }
}
