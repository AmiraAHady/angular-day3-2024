import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  formgroup1:FormGroup;
  // array of form groups
  //  address=[
  //   {
  //     'city':'qena',
  //     'street':'street 2'
  //   },
  //   {
  //     'city':'minia',
  //     'street':'street 11'
  //   },
  // ]

  constructor( private formBuilder:FormBuilder){
    // this.formgroup1=new FormGroup({
    //   // controls
      // firstName:new FormControl('',[Validators.required,Validators.minLength(3)]),
      // lastName:new FormControl('',[Validators.required,Validators.pattern('[A-Za-z]{5,}')]),
      // email:new FormControl('',[Validators.required,Validators.email]),
    // })

    this.formgroup1=this.formBuilder.group({
      firstName:new FormControl('',[Validators.required,Validators.minLength(3)]),
      lastName:new FormControl('',[Validators.required,Validators.pattern('[A-Za-z]{5,}')]),
      email:new FormControl('',[Validators.required,Validators.email]),
      address:this.formBuilder.array([])
    })

  }

  get firstName(){
    return this.formgroup1.get('firstName')
  }
  get address(){
    return this.formgroup1.get('address') as FormArray
  }

  newAddress():FormGroup{
    return this.formBuilder.group({
      // city:['',Validators.required,Validators.pattern('')]
      city:'',
      street:''
    })
  }

  addAddress(){
    this.address.push(this.newAddress())
  }
  removeAddressInput(currentIndex:number){
    this.address.removeAt(currentIndex)
  }
  

  // 
  
}
