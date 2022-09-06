import { Component, h, State } from '@stencil/core';
import { AuthService } from '../../services/auth';

@Component({
  tag: 'app-login',
  styleUrl: 'app-login.css',
  shadow: true,
})
export class AppLogin {
  @State() loggedInUser : string;
  async login(){
    const user = await AuthService.loginAnon();
    console.log(user);
  }
  async googleLogin(){
    const user1 = await AuthService.loginGoogle();
    this.loggedInUser = user1.user.displayName;
    console.log(this.loggedInUser);
    console.log(user1.user.displayName);
  }
  async fbLogin(){
    const user2 = await AuthService.loginFacebook();
    console.log(user2.user);
  }
  render() {
    return [
      <ion-header>
        <ion-toolbar color = "primary">
          <ion-title>Welcome {this.loggedInUser}</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-button onClick={() => this.login()}>Login</ion-button>,
      <ion-button onClick={() => this.googleLogin()}>Login By Google</ion-button>,
      <ion-button onClick={() => this.fbLogin()}>Login By Facebook</ion-button>,
    ];
  }

}
