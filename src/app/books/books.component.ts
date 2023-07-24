import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from './book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  constructor() { }
  bookSelected: Book | undefined;
  onItemSelect(book: Book) {
    console.log("books component - onItemSelect");
    if (book) console.log(JSON.stringify(book));
    this.bookSelected = book;
  }
}
