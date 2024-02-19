import { Component } from '@angular/core';
import { Admin } from '../../models/admin';
import { User } from '../../models/user';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  user1:User=new User(123,'amira','amira@gmail.com',)

  admin1:Admin={
    id:345,
    name:'Hamada',
    role:'Sub-Admin'
  }

}
