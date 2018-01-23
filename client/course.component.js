import React from 'react';

export class CourseComponent extends React.Component{
    render(){
        return <div>
             <h1> {this.props.index} . {this.props.coursedetails.name} </h1>
             <b> Price : </b> {this.props.coursedetails.price} <br/>
             </div>
    }
}