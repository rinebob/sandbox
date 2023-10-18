import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/common/interfaces';

@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksTableComponent implements OnInit {
    @Input() allBooks: Book[] = [];
    @Output() selectedBookId = new EventEmitter<string>();
    @Output() deleteBook = new EventEmitter<string>();

    displayedColumns = ['id', 'title', 'author', 'year', 'actions'];

    ngOnInit(): void {
        // console.log('bT ngOI all books: ', this.allBooks);
    }

    handleEdit(id: string) {
        // console.log('bT hE handle edit.  book title: ', id);
        this.selectedBookId.emit(id);
    }
    
    handleDelete(id: string) {
        // console.log('bT hD handle delete.  book id to delete: ', id);
        this.deleteBook.emit(id);

    }

}
