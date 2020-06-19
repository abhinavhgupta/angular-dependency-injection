import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { EmptyComponent } from './empty/empty.component';
import { SubModule } from './sub/sub.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
			{ path: '', component: EmptyComponent },
			{ path: 'module', loadChildren: () => SubModule },
		]),
    
     ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
