import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { SearchyComponent } from './searchy/searchy.component';
import { ChannelService } from './channel/channel.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent, 
    SearchyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 

  ],
  providers: [ChannelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
