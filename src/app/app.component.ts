import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { JobsComponent } from './jobs/jobs.component';

import { JobSearchAppServiceService } from './job-search-app-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JobsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = "ng-job-search";

}
