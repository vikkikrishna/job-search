import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { JobSearchAppServiceService } from '../job-search-app-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css'
})
export class ListItemComponent implements OnInit {
  @Input('jobs') jobs: any;
  @Input('favouritesPage') favouritesPage: any;


  constructor(private jobService: JobSearchAppServiceService, private router: Router) {

  }


  favourites: any = {};
  ngOnInit(): void {
    this.jobService.getFavourites().forEach(favObj => {
      this.favourites = favObj;
    });
  }

  setFavourites(id: any) {
    if (this.favourites[id]) {
      delete this.favourites[id];
    } else {
      this.favourites[id] = true;
    }
    this.jobService.setFavourites(this.favourites);
  }

  redirectPage(jobId: any) {
    this.router.navigateByUrl('/jobs/' + jobId);
  }

}
