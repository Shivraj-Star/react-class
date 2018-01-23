import React from 'react';

export class ButtonComponent extends React.Component{
    constructor(){
        super()
    }
    showButton(item){
console.log(item);
    }
    render(){
        return <span className="col-md-2">
             <button className="btn btn-info" onClick={this.showButton.bind(this,this.props.buttonCount)}>{this.props.buttonCount}</button>
             </span>
    }
}