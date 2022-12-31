import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
  myname="";
  abc(username:string){
    this.myname =username
  }
  total=0;
  emi=0
  intrest:any;
  cal(p:any,t:any){
      this.total=(p*t*this.intrest)/100;
      this.emi=this.total/t;
  }
  roi(loantype:any){
  //  console.log(loantype.target.value)
    if(loantype.target.value=="car"){
      this.intrest=9;
    }
    else if(loantype.target.value=="home"){
      this.intrest=8;
    }
    else if(loantype.target.value=="edu"){
      this.intrest=10;
    }
    else if(loantype.target.value=="personal"){
      this.intrest=12;
    }
  }
}
