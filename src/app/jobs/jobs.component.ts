import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { JobSearchAppServiceService } from '../job-search-app-service.service';
import { filter } from 'rxjs';


@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent implements OnInit {
  // constructor(private router: Router, private route: ActivatedRoute) {

  // }


  // getdetailsPage(jobId: number) {
  //   this.router.navigate(['/job', jobId])
  // }

  currentUrl = "";
  constructor(private jobService: JobSearchAppServiceService, private router: Router) {

  }


  ngOnInit() {

    console.log(this.router.url)
    this.currentUrl = this.router.url;
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )
      .subscribe((event: any) => {
        console.log(event.url);
        this.currentUrl = event.url;

      });

  }
  // async ngOnInit() {

  //   const jobArr = await this.jobService.getJobLists();
  //   console.log(jobArr)
  //   const jobArr1 = await this.jobService.getJobListById(103528);
  //   console.log(jobArr1)

  // }
  title = 'ng-job-search';

  redirectPage(pageendpoint: string) {
    this.router.navigateByUrl('/jobs/' + pageendpoint);
  }
}
