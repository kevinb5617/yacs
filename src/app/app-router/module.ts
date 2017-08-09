import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchoolListComponent } from '../school-list/component';
import { CourseViewComponent } from '../course-view/component';
import { ScheduleViewComponent } from '../schedule-view/component';
import { AboutComponent } from '../about/component';

const routes: Routes = [
  { path: '', redirectTo: '/schools', pathMatch: 'full' },
  { path: 'schools', component: SchoolListComponent },
  { path: 'courses', component: CourseViewComponent },
  { path: 'schedules', component: ScheduleViewComponent },
  { path: 'about', component: AboutComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [ RouterModule ]
})
export class AppRouterModule {}
