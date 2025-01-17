import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class AuthGoogleService {
  private oAuthService = inject(OAuthService);
  private router = inject(Router);

  constructor() {
    this.initConfiguration();
   }

   initConfiguration(){
    const authConfig : AuthConfig = {
      issuer : 'https://accounts.google.com',
      strictDiscoveryDocumentValidation : false,
      clientId : '126210094320-ur9v5h8bv57bjikvpbvimh23c4s0es1c.apps.googleusercontent.com',
      redirectUri : window.location.origin + '/dashboard',
      scope: 'openid profile email'
    };

    this.oAuthService.configure(authConfig);
    this.oAuthService.setupAutomaticSilentRefresh();
    this.oAuthService.loadDiscoveryDocumentAndTryLogin();

   };

   login(){
    this.oAuthService.initImplicitFlow();

   }

   logout(){
    this.oAuthService.revokeTokenAndLogout();
    this.oAuthService.logOut();

   }

   getProfile(){
      return this.oAuthService.getIdentityClaims();
   }

   getToken(){
        return this.oAuthService.getAccessToken();
   }
}
