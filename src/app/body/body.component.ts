import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiservicesService } from './services/apiservices.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  details: any;
  description: string;
  temperature: string;
  constructor(private apiService: ApiservicesService,private router: Router) {}
  ngOnInit(): void {}
  apiCall(searchTerm: string, type: string): void{
    searchTerm = searchTerm[0].toUpperCase() + searchTerm.slice(1);
    this.apiService.setLocationType(searchTerm, type);
    this.router.navigate(['body'], {queryParams: {location: searchTerm, 'type': type}});
    this.apiService.apiCall().subscribe((data) => {
      this.details = data;
      this.temperature = this.details.main.temp;
      this.description = this.details.weather[0].description;
      this.description = this.description.toLocaleUpperCase();
      console.log(this.details);
    });
  }
}
