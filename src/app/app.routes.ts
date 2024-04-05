import { Routes } from '@angular/router';
import { FavoritesComponent } from './favorites/favorites.component';
import { JobsComponent } from './jobs/jobs.component';
import { AllJobsComponent } from './all-jobs/all-jobs.component';
import { JobDescriptionComponent } from './job-description/job-description.component';

export const routes: Routes = [

    {
        path: '', redirectTo: '/jobs/all-jobs', pathMatch: 'full'
    },
    {
        path: 'jobs', component: JobsComponent,

        children: [
            { path: 'all-jobs', component: AllJobsComponent },
            { path: 'favorites', component: FavoritesComponent },
            { path: ':id', component: JobDescriptionComponent }
        ]
    },
    // {
    //     path: 'jobs/:id', component: JobDescriptionComponent,
    // }
];
