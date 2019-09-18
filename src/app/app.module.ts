import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigService } from './config.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ provide: APP_INITIALIZER, useFactory: InitializeApp, deps: [ConfigService], multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function InitializeApp(configService: ConfigService): () => Promise<any> {
  return () => configService.load();
}
