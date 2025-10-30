import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService } from '../../services/languages/language.service';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [RouterLink, TranslatePipe, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  currentLang = 'en';
  isLanguageMenuOpen: boolean = false;
  isMenuOpen: boolean = false;
  constructor(private langService: LanguageService) {}

  ngOnInit(): void {
    this.currentLang = this.langService.currentLang();
  }

  toggleLanguageMenu() {
    this.isLanguageMenuOpen = !this.isLanguageMenuOpen;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  switchLanguage(lang: string) {
    this.currentLang = lang;
    this.isLanguageMenuOpen = false;
    // Your existing language switch logic
    this.langService.switchLanguage(lang);
    console.log(this.currentLang)
  }
}
