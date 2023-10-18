import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

import { Book } from 'src/app/common/interfaces';
import { ALL_BOOKS } from 'src/app/common/constants';
import { Observable } from 'rxjs';

interface BooksState {
    allBooks: Book[];
    selectedBookId: string | undefined;
    selectedBook: Book | undefined;
}

const INITIAL_BOOKS_STATE: BooksState = {
    allBooks: ALL_BOOKS,
    selectedBookId: undefined,
    selectedBook: undefined,
}

@Injectable({providedIn: 'root'}) 
export class BooksStore extends ComponentStore<BooksState> {

    readonly allBooks$: Observable<Book[]> = this.select((state: BooksState) => 
        state.allBooks,
    );

    selectedBookId$ = this.select((state: BooksState) => 
        state.selectedBookId
    );

    selectedBook$ = this.select( ({allBooks, selectedBookId}) => {
        const book = allBooks.find(book => book.id === selectedBookId);
        // console.log('bSt selected id/book: ', selectedBookId, book);
        return book;
    });

    constructor() {
        super(INITIAL_BOOKS_STATE);
    }

    setAllBooks = this.updater((state: BooksState, books: Book[]) => ({
        ...state,
        allBooks: books.sort(compare),
    }));

    setSelectedBookId = this.updater((state: BooksState, id: string | undefined) => ({
        ...state,
        selectedBookId: id,
    }));

    upsertBook = this.updater((state: BooksState, book: Book) => {
        // console.log('bSt uB incoming book: ', book);
        let existingBook = state.allBooks.find(b => b.id === book.id);
        // console.log('bSt uB existingBook: ', existingBook);
        if (existingBook) {
            existingBook = {...existingBook, ...book}
            // console.log('bSt uB updated existingBook: ', existingBook);
            return {...state, allBooks: [...state.allBooks.filter(b => b.id !== book.id), existingBook].sort(compare)}
        } else {
            // console.log('bSt uB no existingBook');
            return {...state, allBooks: [...state.allBooks, book].sort(compare)}
        }

    });

    deleteBook = this.updater((state: BooksState, id: string) => {
        
        return {...state, allBooks: [...state.allBooks.filter(b => b.id !== id).sort(compare)]}
        

    });
}

function compare(a: Book, b: Book) {
    if (Number(a.id) > Number(b.id)) {
        return 1;
    } else if (Number(a.id) < Number(b.id)) {
        return -1;
    } else {
        return 0;
    }
}