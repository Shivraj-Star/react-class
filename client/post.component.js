import React from 'react';
 import {PostListComponent} from './post.list.component';
 import ReactDOM from 'react-dom';

export default class PostComponent extends React.Component{
    //if we want to initilize bind methods then we use constrctor
    
    //we can initilize all component part into that methods.
    componentWillMount(){
        this.state ={
            posts:[],
            filterPost:[{}]
        }
    }

    componentDidMount(){
        $.get('https://jsonplaceholder.typicode.com/posts',(response)=>{
        console.log(response);
        this.setState({posts:response})
        
        })
    }

    filter(){
        //This useful when DOM is not ready then it creates DOM and then fetch Value
        let FilteredPost  = Number(ReactDOM.findDOMNode(this.refs.postModel).value)
        //This useful when DOM is ready We want to access from input
        // let inputValue  = this.refs.buttonValue.value
        this.setState({filterPost:[this.state.posts[FilteredPost-1]]})
    }
    render(){
        let postMaps = this.state.filterPost.map((post, index)=>{
            return <PostListComponent key={index} post={post} />
        })
        let posts = this.state.posts.map((post, index)=>{
            return <PostListComponent key={index} post={post} />
        })
        
      return (
        <div>
        <div className="col-md-6">
                <h1>Filtered Post</h1>
                <div className="col-md-12 form-group">
                     <input type="text" className="form-control" placeholder="Enter Post Number" ref="postModel" onChange={this.filter.bind(this)} autofocus="true"/>
                    </div>  
        
                <ul className="col-md-12">{postMaps}</ul>
                </div>
                <div className="col-md-6">
                <h1>All Post</h1>
                <ul className="col-md-12">{posts}</ul>
                </div>
            </div>
      )
    }
}