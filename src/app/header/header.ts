import { Component, OnInit, OnDestroy, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInfoService } from '../services/personal-info.service';
import { TextDictionaryService } from '../services/text-dictionary.service';

interface NavigationItem {
  id: string;
  label: string;
}

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit, OnDestroy {
  protected personalInfoService = inject(PersonalInfoService);
  protected textService = inject(TextDictionaryService);
  
  protected isMobileMenuOpen = false;
  protected activeSection = 'home';
  protected isScrolled = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
    this.updateActiveSection();
  }

  ngOnInit() {
    // Close mobile menu when clicking outside
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      const nav = document.querySelector('.nav-container');
      if (nav && !nav.contains(target)) {
        this.isMobileMenuOpen = false;
      }
    });
  }

  ngOnDestroy() {
    // Clean up event listeners if needed
  }

  protected toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  protected onNavClick(sectionId: string): void {
    this.activeSection = sectionId;
    this.isMobileMenuOpen = false; // Close mobile menu on click
    
    // Smooth scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 70;
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }

  private updateActiveSection(): void {
    const sections = ['home', 'skills', 'projects', 'blog', 'contact'];
    const scrollPosition = window.scrollY + 100; // Offset for header

    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const sectionTop = element.offsetTop;
        const sectionBottom = sectionTop + element.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          this.activeSection = sectionId;
          break;
        }
      }
    }
  }
}
