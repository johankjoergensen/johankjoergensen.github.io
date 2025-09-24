import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInfoService, type PersonalInfo } from '../services/personal-info.service';
import { TextDictionaryService } from '../services/text-dictionary.service';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  protected personalInfoService = inject(PersonalInfoService);
  protected textService = inject(TextDictionaryService);
}
