import { Component, OnInit, signal } from '@angular/core';
import { PropertyService } from '../../_service/property.service';
import { ActivatedRoute } from '@angular/router';
import { IProperty } from '../../_interface/property.interface';
import { Collapsible } from '../../shared/collapsible/collapsible';

@Component({
  selector: 'app-property',
  imports: [Collapsible],
  templateUrl: './property.html',
  styleUrl: './property.scss',
})
export class Property implements OnInit {
  protected property = signal<IProperty | null>(null);
  private readonly propertyId: string;
  protected currentImageIndex = signal(0);

  private isDragging = false;
  private startX = 0;
  private currentX = 0;
  private dragThreshold = 50;

  constructor(
    private readonly propertyService: PropertyService,
    private readonly route: ActivatedRoute,
  ) {
    this.propertyId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.propertyService.getPropertyById(this.propertyId).subscribe({
      next: (property: IProperty) => {
        this.property.set(property);
        this.currentImageIndex.set(0);
      },
      error: (error) => {
        console.error('Error fetching property:', error);
      },
    });
  }

  protected nextImage(): void {
    const currentProperty = this.property();
    if (currentProperty && currentProperty.pictures.length > 0) {
      const nextIndex = (this.currentImageIndex() + 1) % currentProperty.pictures.length;
      this.currentImageIndex.set(nextIndex);
    }
  }

  protected previousImage(): void {
    const currentProperty = this.property();
    if (currentProperty && currentProperty.pictures.length > 0) {
      const prevIndex =
        this.currentImageIndex() === 0
          ? currentProperty.pictures.length - 1
          : this.currentImageIndex() - 1;
      this.currentImageIndex.set(prevIndex);
    }
  }

  protected onDragStart(event: MouseEvent): void {
    this.isDragging = true;
    this.startX = event.clientX;
    this.currentX = event.clientX;
    event.preventDefault();
  }

  protected onDragMove(event: MouseEvent): void {
    if (!this.isDragging) return;
    this.currentX = event.clientX;
    event.preventDefault();
  }

  protected onDragEnd(event: MouseEvent): void {
    if (!this.isDragging) return;

    const dragDistance = this.currentX - this.startX;
    const absDragDistance = Math.abs(dragDistance);

    if (absDragDistance > this.dragThreshold) {
      if (dragDistance > 0) {
        this.previousImage();
      } else {
        this.nextImage();
      }
    }

    this.isDragging = false;
    this.startX = 0;
    this.currentX = 0;
  }

  protected onTouchStart(event: TouchEvent): void {
    this.isDragging = true;
    this.startX = event.touches[0].clientX;
    this.currentX = event.touches[0].clientX;
  }

  protected onTouchMove(event: TouchEvent): void {
    if (!this.isDragging) return;
    this.currentX = event.touches[0].clientX;
    event.preventDefault();
  }

  protected onTouchEnd(event: TouchEvent): void {
    if (!this.isDragging) return;

    const dragDistance = this.currentX - this.startX;
    const absDragDistance = Math.abs(dragDistance);

    if (absDragDistance > this.dragThreshold) {
      if (dragDistance > 0) {
        this.previousImage();
      } else {
        this.nextImage();
      }
    }

    this.isDragging = false;
    this.startX = 0;
    this.currentX = 0;
  }

  protected getStarArray(): number[] {
    return Array.from({ length: 5 }, (_, i) => i + 1);
  }
}
