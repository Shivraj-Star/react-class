
import React from 'react';
import ReactDOM from 'react-dom';
import BasicComponent from './basic.component';
import { CourseComponent } from './course.component';
import { ListOfCourses } from './listofcourses.component';
import { ShoppingCart } from './shoppingcart.component';
import CustomButtonComponent from './custom.button.component';
import ButtonListComponent from './buttonList.component';
import LifecycleComponent from './lifecycle';
import PostComponent from './post.component';
class MainComponent extends React.Component {
    render() {
        return (
            <div>
                <div className="col-md-12">
                <div className="page-header col-md-12"><b>Post $AJAX component</b></div>
                <PostComponent />
                </div>
                <div className="col-md-12">
                <div className="page-header col-md-12"><b>Lifecycle component</b></div>
                <LifecycleComponent />
                </div>
                
                <div className="page-header col-md-12"><b>Button List component</b></div>
                <ButtonListComponent />
                <div className="page-header col-md-12"><b>Custom Button List component</b></div>

                <CustomButtonComponent initialCount={11} />
                <hr />
                <ShoppingCart />
                <hr />

                <ListOfCourses />
            </div>
        )
    }
}
ReactDOM.render(<MainComponent />, document.getElementById('content'));
