import { Component } from '@angular/core';
import {   Router } from '@angular/router';

@Component({
  selector: 'ats-home',
  templateUrl: './atshome.component.html',
  styleUrls: ['./atshome.component.css']
})
export class AtshomeComponent {
  Dataobj:any={}
Fname:any;
Lname:any;
Emailid: any ;
gender:any;
Mobile:any;
Email:any
arrlist:any=[{}];
  constructor(private navlink: Router){
    // this.Fname=''
    // this.Lname='';
    // this.Emailid="";
    // this.gender;
    // this.Mobile = "";
    // this.Email=""

    }
    onsubmit()
    {
      this.arrlist.push(this.Dataobj)
    console.log(this.arrlist)
    }
}
