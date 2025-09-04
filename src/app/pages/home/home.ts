import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PropertyService } from '../../_service/property.service';
import { IProperty } from '../../_interface/property.interface';
import { PropertyCard } from '../../shared/property-card/property-card';

@Component({
  selector: 'app-home',
  imports: [PropertyCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  protected properties = signal<IProperty[]>([]);
  constructor(private readonly propertyService: PropertyService) {}

  ngOnInit(): void {
    this.propertyService.getAll().subscribe({
      next: (properties: IProperty[]) => {
        this.properties.set(properties);
      },
      error: (error) => {
        console.error('Error fetching properties:', error);
      },
    });
  }
}
