import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { LogComponent } from "./log/log.component";
import { DayComponent } from "./day/day.component";
import { AddComponent } from "./add/add.component";
import { PagingComponent } from "./paging/paging.component";

import { registerLocaleData } from "@angular/common";
import localeAzCa from "@angular/common/locales/az-Latn";

registerLocaleData(localeAzCa);

@NgModule({
  declarations: [
    AppComponent,
    LogComponent,
    DayComponent,
    AddComponent,
    PagingComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
