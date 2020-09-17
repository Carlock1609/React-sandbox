import React, { useState, useEffect } from 'react';
import CommentForm from './CommentForm';
import Comment from './Comment';

const Post = ({ status, comments, index, time, id, addComment }) => {
    // Everytime a comment is made the everypost would refresh.
    // Now only the specific Post refreshes when it gets a comment.
    const [commentsArr, setCommentsArr] = useState([])

    // Listening for changes in comments arr prop
    useEffect(() => {
        setCommentsArr(comments)
    }, [comments])

    // mapping comment arr to component
    const displayComments = commentsArr.map((comment, index) => (
        <Comment
            key={index}
            text={comment.text}
            user={comment.user}
        />
    ));

    return (
        <div className="Post">
            <div className="post-auth-user">
                <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=724&q=80" alt=""/>
                <div>
                    <div><strong>Jonathan Yates</strong></div>
                    <div className="post-time">{time}h ago</div>
                </div>
            </div>
            <div className="post-status">
                {status}
            </div>
            <div className="post-comments">
                {displayComments}
            </div>
            <div>
                <CommentForm addComment={addComment} index={index} />
            </div>
        </div>
    );
};

export default Post;