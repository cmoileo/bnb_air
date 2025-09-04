import { Component } from '@angular/core';
import { Collapsible } from '../../shared/collapsible/collapsible';

@Component({
  selector: 'app-about',
  imports: [Collapsible],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {}
