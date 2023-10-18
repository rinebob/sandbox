import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesignSystemComponent } from './design-system/design-system.component';
import { MaterialViewComponent } from './material-view/material-view.component';
import { AngNewFeaturesComponent } from './ang-new-features/ang-new-features.component';
import { BooksViewComponent } from './books-view/books-view.component';
import { BookFormComponent } from './books-view/book-form/book-form.component';
import { BooksTableComponent } from './books-view/books-table/books-table.component';

@NgModule({
  declarations: [
    AppComponent,
    DesignSystemComponent,
    MaterialViewComponent,
    AngNewFeaturesComponent,
    BooksViewComponent,
    BookFormComponent,
    BooksTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatTableModule,
    MatToolbarModule,

    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
