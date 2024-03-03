import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, WritableSignal, computed, signal } from '@angular/core';
import { Book } from 'src/app/common/interfaces';

@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksTableComponent implements OnInit {
    @Input() 
    set allBooks(books: Book[]) {
        this.allBooksSG.set(books);
        console.log('bT @i all books: ', books);
        this.computeStatistics();
    }
    get allBooks() {
        return this.allBooksSG();
    }
    private allBooksSG: WritableSignal<Book[]> = signal([]);

    @Output() selectedBookId = new EventEmitter<string>();
    @Output() deleteBook = new EventEmitter<string>();

    displayedColumns = ['id', 'title', 'author', 'year', 'pagesRead', 'actions'];

    totalBooks = signal(0);
    totalPagesRead = signal(0);
    contrivedNum = computed(() => this.totalBooks() * this.totalPagesRead());

    ngOnInit(): void {
        // console.log('bT ngOI all books: ', this.allBooks);
    }

    computeStatistics() {
        console.log('bT cS compute stats');
        const totalBooks = this.allBooksSG().length;
        const totalPagesRead = this.allBooksSG().map(book => book.pagesRead).reduce((acc, value) => acc + Number(value), 0);

        this.totalBooks.set(totalBooks);
        this.totalPagesRead.set(totalPagesRead);

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
