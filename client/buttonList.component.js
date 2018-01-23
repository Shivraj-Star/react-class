import React from 'react';
import { ButtonComponent } from './button.component';
import ReactDOM from 'react-dom';
export default class ButtonListComponent extends React.Component {
    constructor() {
        super();
        this.state = {count : [10, 20, 30, 40, 50]}
        
        // this.incrementCount = this.incrementCount.bind(this);
    }

    addItem(item){
        debugger;
        //This useful when DOM is not ready then it creates DOM and then fetch Value
        let inputValue  = ReactDOM.findDOMNode(this.refs.buttonValue).value
        //This useful when DOM is ready We want to access from input
        // let inputValue  = this.refs.buttonValue.value
        this.setState({count:[...this.state.count,inputValue]})
    }

    render() {
        var listOfButtonComponent = this.state.count.map(function (c, index) {
            return <ButtonComponent buttonCount={c} key={index + 1}  />
        });

        return (<div>
            <div className="col-md-12 form-group">
                  <span className="col-md-4">
                     <input type="text" className="form-control" placeholder="Enter Number" ref="buttonValue"/>
                    </span>  
                    <span className="col-md-4">
                     <input type="button" className="btn btn-primary" value ="Save" onClick={this.addItem.bind(this)}/>
                    </span>  
            </div>

            <div className="col-md-12">
                {listOfButtonComponent}
            </div></div>)
    }
}