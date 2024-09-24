import type { CanActivateFn } from '@angular/router';

export const isAuthGuard: CanActivateFn = (route, state) => {
  const isAuth = localStorage.getItem('isAuth');
  return isAuth ? true : false ;
};
