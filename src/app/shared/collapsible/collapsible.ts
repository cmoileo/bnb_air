import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-collapsible',
  imports: [],
  templateUrl: './collapsible.html',
  styleUrl: './collapsible.scss',
})
export class Collapsible {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) content!: string;

  protected isExpanded = signal(false);

  protected toggle(): void {
    this.isExpanded.set(!this.isExpanded());
  }
}
