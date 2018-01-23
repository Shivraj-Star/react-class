import React from 'react';

export class PostListComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    showButton(item) {
        console.log(item);
    }
    render() {
        let list;
        if (this.props.post && Object.keys(this.props.post).length) {
            list = (
                <div className="list-group-item">
                    <div><b>Id{this.props.post.id}</b></div>
                    <div><b>Title : </b>{this.props.post.title}</div>
                    <div><b>body : </b>{this.props.post.body}</div>
                </div>
            )
        }
        else{
            list = (
                <div className="alert alert-danger col-md-12">Data not found</div>
            )
        }
        return (

            <div className="list-group">
                {list}
            </div>
        )
    }
}