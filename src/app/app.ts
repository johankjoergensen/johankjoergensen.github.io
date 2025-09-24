import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './hero/hero';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { TextDictionaryService } from './services/text-dictionary.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hero, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected textService = inject(TextDictionaryService);
  
  protected title = 'Personal Portfolio';
}
