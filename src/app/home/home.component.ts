import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.changeThemeColor();
  }

  toggleTheme(){
    // Whenever the user explicitly chooses theme color
    if(localStorage.getItem('theme') === 'dark')
      localStorage.setItem('theme','light');
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

  changeThemeAsLikeOs(){
    // Whenever the user explicitly chooses to respect the OS preference
    localStorage.removeItem('theme')
  }

}
