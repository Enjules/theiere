import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';

@NgModule({
    bootstrap: [AppComponent],

    imports: [
        BrowserModule.withServerTransition({ appId: 'app-root' }),

        AppModule,
        AppMaterialModule,
        BrowserAnimationsModule,

    ]
})
export class AppBrowserModule { }
