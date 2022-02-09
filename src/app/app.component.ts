import { Component, OnInit } from '@angular/core';
import { ParticlesConfig } from 'src/app/particles-config';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faXingSquare } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';


declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title = 'imbelal_portfulio';
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


  public ngOnInit(): void {
    this.invokeParticles();
    this.changeThemeColor();
  }

  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function () { });
  }

  toggleTheme() {
    // Whenever the user explicitly chooses theme color
    if (localStorage.getItem('theme') === 'dark')
      localStorage.setItem('theme', ''); // replacing dark string with empty string
    else
      localStorage.setItem('theme', 'dark');

    this.changeThemeColor();
  }

  changeThemeColor() {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

}
