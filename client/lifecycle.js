import React from 'react';
import { ButtonComponent } from './button.component';
import ReactDOM from 'react-dom';
export default class LifecycleComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log("within constructor");

    }
    componentWillMount() {
        //it invokes before Dom render. we can initialize all things here
        this.state = { courseName: "React" };
        console.log("within componentWillMount");
    }

    componentDidMount() {
        //After render method it invokes
        console.log("within componentDidMount");
    }

    shouldComponentUpdate() {
        //it invokes after any state change. 
        //it returns true then it changes state otherwises false- it does not change state
        //it always true or false. its kind of $watch
        console.log("within shouldComponentUpdate");

    //we write one condition like if value length grater than 10 it will not update UI and input
        if(arguments[1].courseName.length>10){
            return false;
        }
        else{
            return true;
            
        }
    }
    componentWillUpdate() {
        // It goes to render to update data
    console.log("Within componentWillUpdate");

    }

    componentDidUpdate(){
        // it will invokes after render complete
        console.log("Within componentDidUpdate");

    }

    changeInput() {
        let inputValue = ReactDOM.findDOMNode(this.refs.course).value;
        this.setState({ courseName: inputValue });
    }

    render() {
        console.log("within Render");

        return (<div>
            <div className="col-md-4">
                <input type="text" className="form-control" placeholder="Enter Course Name" ref="course" value={this.state.courseName} onChange={this.changeInput.bind(this)} />
                <h1>Printed Value : {this.state.courseName}</h1>
            </div>
        </div>)
    }
}