import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from '../book.model';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent {
  books: Book[] = [
    { name: "Breathe", description: "Change the way you Breathe", published: "1/1/1947", publisher: "Not Me", price: "450", author: "Its Me", isbn: "1234-2345-6543", edition: "2023", supplier: "Its You", coverImage: "cover.png" },
    { name: "Breathe 2", description: "Change the way you Breathe", published: "15/8/1947", publisher: "Not Me", price: "230", author: "Its Me", isbn: "1234-2345-6543", edition: "2023", supplier: "Its You", coverImage: "cover.png" },
  ];
  constructor() { }
  ngOnInit() {

  }
  @Output() itemSelected = new EventEmitter<Book>();
  onItemSelect(book: Book) {
    console.log("book list component - onItemSelect");
    if (book) console.log(JSON.stringify(book));
    this.itemSelected.emit(book);
  }
}
