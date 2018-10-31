import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material.module';
import { AppComponentModule } from './app-component.module';
import { AuthService } from './services/auth.service';


export function authServiceFactory(provider: AuthService) {
  return () => provider.load();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgtUniversalModule,
    AppMaterialModule,
    AppRoutingModule,
    AppComponentModule
  ],
  providers: [
    AuthService,
    { provide: APP_INITIALIZER, useFactory: authServiceFactory, deps: [AuthService], multi: true }
  ],
})
export class AppModule { }
