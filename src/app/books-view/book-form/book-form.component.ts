import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, signal } from '@angular/core';
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
        this.bookBS.next(book);
        console.log('bF @i book: ', book);
        console.log('bF @i t.bookBS.v: ', this.bookBS.value);
        if (book) {
            this.populateForm(book);
        }
    } 
    get book() {
        return this.bookBS.value;
    }
    bookBS = new BehaviorSubject<Book>(BOOK_INITIALIZER);

    @Input()
    set nextId(id: number) {
        if (id) {
            this.nextIdSG.set(id);
            console.log('bF @i next id: ', id);
            console.log('bF @i t.nextIdSG(): ', this.nextIdSG());
            
        }
    } 
    get nextId() {
        return this.nextIdSG();
    }
    nextIdSG = signal<number>(0);

    @Output() outputBook = new EventEmitter<Book | undefined>();

    // idControl = new FormControl('');
    titleControl = new FormControl('');
    authorControl = new FormControl('');
    yearControl = new FormControl('');
    categoryControl = new FormControl('');
    typeControl = new FormControl('');
    pagesReadControl = new FormControl(0);

    bookForm = new FormGroup({
        // 'idControl': this.idControl,
        'titleControl': this.titleControl,
        'authorControl': this.authorControl,
        'yearControl': this.yearControl,
        'categoryControl': this.categoryControl,
        'typeControl': this.typeControl,
        'pagesReadControl': this.pagesReadControl,
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
        this.pagesReadControl.setValue(book.pagesRead);
        
        // console.log('bF pF populated form: ', this.bookForm);
    }

    handleSave() {
        console.log('bF hS handle save.  form value: ', this.bookForm.value);
        const id = this.book?.id ?? this.nextId;
        console.log('bF hS handle save. t.nextId/t.book.id: ', this.nextId, this.book?.id);
        if (this.bookForm.controls['titleControl'].value) {
            console.log('bF hS handle save. id/t.book.id: ', id, this.book?.id);
            const book: Book = {
                id: id.toString(),
                title: this.bookForm.controls['titleControl'].value ?? '',
                author: this.bookForm.controls['authorControl'].value ?? '',
                year: this.bookForm.controls['yearControl'].value ?? '',
                pagesRead: this.bookForm.controls['pagesReadControl'].value ?? 0,
            }
            console.log('bF hS handle save. book: ', book);
            
            this.outputBook.emit(book);
            
        }
        console.log('bF hS calling reset');
        this.bookForm.reset();
        this.outputBook.emit(undefined);
    }
    
    handleCancel() {
        // console.log('bF hS handle cancel');
        this.bookForm.reset();
        this.outputBook.emit(undefined);

    }
}
