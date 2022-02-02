import { Component, OnInit } from '@angular/core';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faXingSquare } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons';

import Typed from 'typed.js';
import { environment } from 'src/environments/environment';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faPalette = faPalette;
  faMoon = faMoon;
  faSun = faSun;
  faLinkedin = faLinkedin;
  faXing = faXingSquare;
  faGithub = faGithub;
  faMail = faEnvelope;
  faMobile = faPhoneSquare;
  email = environment.email;
  mobile = environment.mobile;
  mobileNo = `tel:${environment.mobile}`;

  constructor() { }

  ngOnInit(): void {
    this.changeThemeColor();
    const options_for_second_paragraph = {
      strings: [
        'A passionate full-stack software developer who focuses on writing clean, elegant and efficient code.',
        'Building automated software solutions since 2018 to run complex business smoothly using latest technologies like .NET, .NET Core, SQL, Angular, VueJS.'],
      typeSpeed: 30,
      backSpeed: 10,
      showCursor: true,
      smartBackspace: true,
      cursorChar: '_',
      loop: true
    };
    const typed = new Typed('.second_typed-element', options_for_second_paragraph);
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
