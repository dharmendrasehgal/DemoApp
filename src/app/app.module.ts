import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { FooterComponent } from './footer/footer.component';
import { FeatureListComponent } from './feature-list/feature-list.component';
import { BannerComponentComponent } from './banner-component/banner-component.component';
import { Col3ComponentComponent } from './col3-component/col3-component.component';
import { Col2componentComponent } from './col2component/col2component.component';
import { HighlighterComponent } from './highlighter/highlighter.component';
import { Col4ComponentComponent } from './col4-component/col4-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchBoxComponent,
    FooterComponent,
    FeatureListComponent,
    BannerComponentComponent,
    Col3ComponentComponent,
    Col2componentComponent,
    HighlighterComponent,
    Col4ComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
