import { Component } from '@angular/core';
import { JobSearchAppServiceService } from '../job-search-app-service.service';
import { ListItemComponent } from '../list-item/list-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [ListItemComponent, CommonModule],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {

  favouriteJobsArray: any = [];
  favourites: any = {};
  constructor(private jobService: JobSearchAppServiceService) {

  }

  ngOnInit(): void {
    this.jobService.getFavourites().forEach(favObj => {
      this.favourites = favObj;
      this.getJobs();
    });
  }

  async getJobs() {
    let jobs = await this.jobService.getJobLists();
    this.favouriteJobsArray = jobs.filter((job: any) => this.favourites[job.id]);
    console.log(this.favouriteJobsArray)
  }
}
