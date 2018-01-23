import React from 'react';

export class ProductComponent extends React.Component{
   
    render(){
        return <div >
             <h1> {this.props.index} . {this.props.productdetails.name} </h1>
             <b> Price : </b> {this.props.productdetails.price} <br/>
             <b> quantity : </b> {this.props.productdetails.quantity} <br/>
             <b> stock : </b> {this.props.productdetails.stock} <br/>
             <b> image : </b> <img src={this.props.productdetails.image} /> <br/>
             </div>
    }

  
}