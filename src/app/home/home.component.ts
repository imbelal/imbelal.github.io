import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
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

}
