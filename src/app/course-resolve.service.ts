import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import {CourseService} from './course.service';

@Injectable()
export class CourseResolveService implements Resolve<any>{
    constructor(private courseservice:CourseService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
       return  this.courseservice.getAllCourse().then((data)=>{return data;});
    }
}