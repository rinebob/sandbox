import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import { BOOK_INITIALIZER } from 'src/app/common/constants';
import { Book } from 'src/app/common/interfaces';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookFormComponent implements OnInit {
    @Input()
    set book(book: Book) {
        if (book) {
            this.bookBS.next(book);
            // console.log('bF @i book: ', book);
            // console.log('bF @i t.bookBS.v: ', this.bookBS.value);
            this.populateForm(book);
        }
    } 
    get book() {
        return this.bookBS.value;
    }
    bookBS = new BehaviorSubject<Book>(BOOK_INITIALIZER);

    @Output() outputBook = new EventEmitter<Book | undefined>();

    idControl = new FormControl('');
    titleControl = new FormControl('');
    authorControl = new FormControl('');
    yearControl = new FormControl('');
    categoryControl = new FormControl('');
    typeControl = new FormControl('');

    bookForm = new FormGroup({
        'idControl': this.idControl,
        'titleControl': this.titleControl,
        'authorControl': this.authorControl,
        'yearControl': this.yearControl,
        'categoryControl': this.categoryControl,
        'typeControl': this.typeControl,
    });

    ngOnInit(): void {
        // console.log('bF ngOI book: ', this.book);

        // this.bookForm.valueChanges.pipe().subscribe(changes => {
        //     console.log('bF ngOI form value changes sub: ', changes);
        // });
    }
    
    populateForm(book: Book) {
        // console.log('bF pF populate form called');
        
        // this.idControl.setValue(book.id);
        this.titleControl.setValue(book.title);
        this.authorControl.setValue(book.author);
        this.yearControl.setValue(book.year);
        // this.categoryControl.setValue(book.category);
        // this.typeControl.setValue(book.type);
        
        // console.log('bF pF populated form: ', this.bookForm);
    }

    handleSave() {
        // console.log('bF hS handle save.  form value: ', this.bookForm.value);
        if (this.bookForm.controls['titleControl'].value) {
            const book: Book = {
                id: this.book.id ?? '',
                title: this.bookForm.controls['titleControl'].value ?? '',
                author: this.bookForm.controls['authorControl'].value ?? '',
                year: this.bookForm.controls['yearControl'].value ?? '',
            }
            // console.log('bF hS handle save. book: ', book);
    
            this.outputBook.emit(book);
            this.bookForm.reset();

        }
    }
    
    handleCancel() {
        // console.log('bF hS handle cancel');
        this.bookForm.reset();
        this.outputBook.emit(undefined);

    }
}
