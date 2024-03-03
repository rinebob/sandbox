import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import {  toObservable } from '@angular/core/rxjs-interop';

import { BooksStore } from './services/books-store';
import { Book } from '../common/interfaces';

@Component({
  selector: 'app-books-view',
  templateUrl: './books-view.component.html',
  styleUrls: ['./books-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksViewComponent implements OnDestroy, OnInit {

    allBooks$ = this.booksStore.allBooks$;
    selectedBookId$ = this.booksStore.selectedBookId$;
    selectedBook$ = this.booksStore.selectedBook$;

    // nextId = 0;
    nextIdSG = signal(0);
    nextId$ = toObservable(this.nextIdSG);

    constructor(private booksStore: BooksStore) {

    }

    ngOnInit(): void {
        this.allBooks$.pipe().subscribe(books => {
            console.log('bV ngOI all books: ', books);
            this.generateNextId(books);
            // this.nextIdSG.set(Number(books[books.length - 1].id) + 10);
            
            console.log('bV ngOI t.nexId: ', this.nextIdSG());
            
        });
        
        this.selectedBookId$.pipe().subscribe(bookId => {
            console.log('bV ngOI selected book id: ', bookId);

        });
       
        this.selectedBook$.pipe().subscribe(book => {
            console.log('bV ngOI selected book: ', book);

        });
    }

    ngOnDestroy(): void {
        
    }

    generateNextId(books: Book[]) {
        const id = Number(books[books.length - 1].id) + 10;
        this.nextIdSG.set(id);
        console.log('bV gNI id/nextIdSG: ', id, this.nextIdSG());
    }

    handleSetSelectedBookId(id: string) {
        console.log('bV sSBI selected book id: ', id);

        this.booksStore.setSelectedBookId(id);
    }

    handleBookOutput(book?: Book) {
        if (book) {
            book.id = Number(book.id) > 0 ? book.id : this.nextIdSG().toString();
            console.log('bV hBO handleBookOutput book/id: ', book);
            this.booksStore.upsertBook(book);
            this.booksStore.setSelectedBookId(undefined);

        } else {
            this.booksStore.setSelectedBookId(undefined);
        }
    }
    saveBook(book: Book) {
        console.log('bV hSB save book: ', book);
        this.booksStore.upsertBook(book);
        this.booksStore.setSelectedBookId(undefined);
        
    }

    handleDeleteBook(id: string) {
        // console.log('bV hDB delete book. id: ', id);
        this.booksStore.deleteBook(id);
    }
}
