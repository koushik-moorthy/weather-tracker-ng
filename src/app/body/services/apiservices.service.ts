import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiservicesService {
  constructor(private http: HttpClient) { }
  location: string;
  type: string;
  setLocationType(location: string , type: string): void {
    this.location = location;
    this.type = type;
  }
  apiCall() {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + this.location + '&units=' + this.type + '&appid=339d2ec160fdb5d9d57edc0925fc113f');
  }
}
