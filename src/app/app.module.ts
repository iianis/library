import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BooksComponent } from './books/books.component';
import { MembersComponent } from './members/members.component';
import { AuthorsComponent } from './authors/authors.component';
import { PublishersComponent } from './publishers/publishers.component';
import { ReportsComponent } from './reports/reports.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { BooksDetailComponent } from './books/books-detail/books-detail.component';
import { AuthorsListComponent } from './authors/authors-list/authors-list.component';
import { AuthorsDetailComponent } from './authors/authors-detail/authors-detail.component';
import { AuthorsEditComponent } from './authors/authors-edit/authors-edit.component';
import { AuthorsItemComponent } from './authors/authors-item/authors-item.component';
import { BooksItemComponent } from './books/books-item/books-item.component';
import { BookingsListComponent } from './bookings-list/bookings-list.component';
import { BookingsEditComponent } from './bookings-list/bookings-edit/bookings-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksComponent,
    MembersComponent,
    AuthorsComponent,
    PublishersComponent,
    ReportsComponent,
    BooksListComponent,
    BooksDetailComponent,
    AuthorsListComponent,
    AuthorsDetailComponent,
    AuthorsEditComponent,
    AuthorsItemComponent,
    BooksItemComponent,
    BookingsListComponent,
    BookingsEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
