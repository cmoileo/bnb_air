import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IProperty } from '../../_interface/property.interface';

@Component({
  selector: 'app-property-card',
  imports: [RouterLink],
  templateUrl: './property-card.html',
  styleUrl: './property-card.scss',
})
export class PropertyCard {
  @Input({ required: true }) property!: IProperty;
}
