import { Component, OnInit } from '@angular/core';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faPalette = faPalette;
  faMoon = faMoon;
  faSun = faSun;
  constructor() { }

  ngOnInit(): void {
    this.changeThemeColor();
    const options = {
      strings: [
        'Hi I am Belal',
        'A passionate full-stack software developer who focuses on writing clean, elegant and efficient code.'],
      typeSpeed: 30,
      backSpeed: 10,
      showCursor: true,
      smartBackspace: true,
      cursorChar: '_',
      loop: true
    };
    const typed = new Typed('.typed-element', options);
  }

  toggleTheme(){
    // Whenever the user explicitly chooses theme color
    if(localStorage.getItem('theme') === 'dark')
      localStorage.setItem('theme',''); // replacing dark string with empty string
    else
      localStorage.setItem('theme','dark');

    this.changeThemeColor();
  }

  changeThemeColor(){
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

}
