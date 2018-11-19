import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  apiUrl = 'https://api.lessoeurstheiere.com';
  onDevelopment: boolean;

  constructor(
  ) {
    this.onDevelopment = false;
  }
}
