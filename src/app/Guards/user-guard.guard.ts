import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const userGuard: CanActivateFn = (route, state) => {
  const authServ=inject(AuthService)
  const router=inject(Router)

  if(authServ.isUserLogged){
    return true;
  }else{
    alert("plz login first")
    router.navigate(['/join/signup'])
    return false
  }
 
};
