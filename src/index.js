import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard/>
      <CommentDetail
        author={faker.name.firstName()}
        timeAgo="Today at 4:55pm"
        commentText={faker.lorem.sentence()}
        avatarImg={faker.image.avatar()}
        />
      <CommentDetail
        author={faker.name.firstName()}
        timeAgo="Today at 1:55pm"
        commentText={faker.lorem.sentence()}
        avatarImg={faker.image.avatar()}
        />
      <CommentDetail
        author={faker.name.firstName()}
        timeAgo="Today at 8:55pm"
        commentText={faker.lorem.sentence()}
        avatarImg={faker.image.avatar()}
        />

    </div>
  )
};

ReactDOM.render(<App/>, document.querySelector('#root'));
