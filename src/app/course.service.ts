export class CourseService{
    course=[
        {id:1,coursename:'python',duration :3},
        {id:2,coursename:'c',duration :3},
        {id:3,coursename:'java',duration :3}
        
    ];

    getAllCourse() :any {
        const courselist=new Promise((resolve,reject)=>
        {setTimeout(() => {
            resolve(this.course)
        },5000)
    });
    return courselist;
}
}