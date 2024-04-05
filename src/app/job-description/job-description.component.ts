import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobSearchAppServiceService } from '../job-search-app-service.service';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-job-description',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-description.component.html',
  styleUrl: './job-description.component.css'
})
export class JobDescriptionComponent {

  jobId: any;
  jobObj: any = {};
  constructor(private jobService: JobSearchAppServiceService,
    private route: ActivatedRoute, private location: Location) {
  }

  ngOnInit() {
    this.jobId = this.route.snapshot.params['id'];
    this.getJob();
  }


  async getJob() {
    this.jobObj = await this.jobService.getJobListById(this.jobId);

  }

  goHome() {
    this.location.back();
  }
}
