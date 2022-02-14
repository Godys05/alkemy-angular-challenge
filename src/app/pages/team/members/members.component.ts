import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  @Input() heroes: any[] = [];
  @Output() deleteHero = new EventEmitter<string>();

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    
  }

  onDeleteHero(heroId: string): void {
    this.deleteHero.emit(heroId);
  }

  sanitizeHeroImage(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

}
