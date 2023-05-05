import { Component ,OnInit} from '@angular/core';
import {CourseService} from '../course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit{

  constructor(private courseservice:CourseService,private route:ActivatedRoute){}

  course=[];

  ngOnInit(): void {
    //this.course=this.ourseservice.course;

    //this.courseservice.getAllCourse().then((data)=>{this.course=data;})
this.course=this.route.data['course'];
  }
}
