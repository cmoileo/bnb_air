import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProperty } from '../_interface/property.interface';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  private readonly url = environment.apiUrl;

  constructor(private readonly http: HttpClient) {}

  public getAll(): Observable<IProperty[]> {
    return this.http.get<IProperty[]>(`${this.url}/api/properties`);
  }

  public getPropertyById(id: string): Observable<IProperty> {
    return this.http.get<IProperty>(`${this.url}/api/properties/${id}`);
  }
}
