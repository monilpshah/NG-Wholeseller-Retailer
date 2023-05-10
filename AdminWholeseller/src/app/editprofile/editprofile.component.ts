import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { user } from '../classes/user';


@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  usertype:string[]=[
    'Wholsaler',
    'Retailer'
  ];
  cities:string[]=[
    'Ahmedabad',
    'Ghandhinagar',
    'Baroda',
    'Surat',
    'Rajkot',
    'Mumbai',
    'Delhi'
  ];
  email_id:string;
  password:string;
  user_name:string;
  mobile_no:string;
  user_type:string;
  address:string;
  city:string;
  flag:boolean=true;
  id:string;
  constructor(private _ser:UserserviceService,
              private _router:Router,
              private _actRoute:ActivatedRoute) { }

  ngOnInit() {
    this.id=this._actRoute.snapshot.params['email_id'];

    this._ser.getUserById("margitrivedi@gmail.com").subscribe(
      (data:any)=>{
        this.email_id=data[0].email_id;
        this.password=data[0].password;
        this.user_name=data[0].user_name;
        this.mobile_no=data[0].mobile_no;
        this.user_type=data[0].user_type;
        this.city=data[0].city;
        this.address=data[0].address;
        //this.city=this.cities[0];
      }
    );
  }

onSave(){
  this._ser.updateUser(new user(this.email_id,this.password,this.user_name,this.mobile_no,this.user_type,this.city,this.address)).subscribe(
    (data:any)=>{
      this._router.navigate(['']);
    }
  );
}

}



