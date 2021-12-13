import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  #isAuth = true;

  get isAuth(): boolean {
    return this.#isAuth;
  }

  set isAuth(newValue: boolean) {
    this.#isAuth = newValue;
  }
}
