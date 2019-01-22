import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './AprovalCard';


const App = () => {
    return (
        <div className='ui container comments'>

            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    <p>Are you sure you want to do this?</p>
                </div>
                
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.avatar()} 
                    author="Sam" 
                    timeAgo="Today at 5:00PM" 
                    content="Hey, nice blog post!" 
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.avatar()} 
                    author="Alex" 
                    timeAgo="Today at 2:30PM" 
                    content="Wow. Very interesting!"  
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.avatar()}
                    author="Jane" 
                    timeAgo="Yesterday at 12:00PM" 
                    content="Good job!" 
                />
            </ApprovalCard>
        </div>
    );
}


ReactDOM.render(
    <App />,
    document.querySelector( '#root' )
);