import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Iuser } from '../../../models/iuser';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  constructor(private router:Router,private userServ:UserService){}
   user:Iuser={} as Iuser
  //  user:Iuser={
  //    firstName:'',
  //    lastName:'',
  //    email:''
  //  } 
  gotosignup(){
   this.router.navigate(['/join/login'])
  }

  addUser(){
    this.userServ.creatUser(this.user).subscribe({
      next:(data)=>{
        console.log(data);
        
      }
    })
  }

}
