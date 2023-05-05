import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import {CourseResolveService} from './course-resolve.service'

const routes: Routes = [
{path:'home', component:HomeComponent},
{path: 'course',Component:CourseComponent ,resolve:{course:CourseResolveService}}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
