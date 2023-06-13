import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sandbox';
  darkModeOn = false;

  constructor(@Inject(DOCUMENT) private doc: Document ) {

  }

  ngOnInit(): void {
    const mode = localStorage.getItem('dark-mode');
    this.darkModeOn = mode === 'true' ? true : false;
    if (this.darkModeOn) {
      this.doc.documentElement.classList.toggle('app-dark-theme', this.darkModeOn);
    }
  }
  
  toggleDarkMode() {
    this.darkModeOn = !this.darkModeOn;
    this.doc.documentElement.classList.toggle("app-dark-theme", this.darkModeOn);
    this.setDarkModeLocalStorage(this.darkModeOn.toString())
  }

  setDarkModeLocalStorage(mode: string) {
    localStorage.setItem('dark-mode', mode);
  }


}
