import React from 'react';
import {CourseComponent} from './course.component'
export class ListOfCourses extends React.Component{
    
    constructor(){
        super();
        this.courses =[ 
            {name:'ReactJS',price:2000},
        {name:'Node',price:3000},
        {name:'Knockout',price:8000}
        
    ];
        
    }
    
    render(){

        var listOfCoursesToBecreated = this.courses.map(function(course,index){
                return <CourseComponent coursedetails={course} key={index+1} />            
        });

        return <div>
            {listOfCoursesToBecreated}
                 </div>
    }
}