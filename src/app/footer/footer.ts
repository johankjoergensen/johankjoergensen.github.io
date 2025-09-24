import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInfoService, type PersonalInfo, type SocialLink } from '../services/personal-info.service';
import { TextDictionaryService } from '../services/text-dictionary.service';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  protected personalInfoService = inject(PersonalInfoService);
  protected textService = inject(TextDictionaryService);
}
