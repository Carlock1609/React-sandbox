import React, { useState } from 'react';

import Post from './components/Post';
import PostForm from './components/PostForm';

import randomId from './utils/randomId';
import randomTime from './utils/randomTime';
import randomName from './utils/randomName';

const App = () => {
    const [posts, setPosts] = useState([]);
    console.log(posts)

    // Copies and spreads old posts with incoming post, and sets it to state.
    const addPost = (post) => {
        const newPost = [...posts, { status: post, comments: [], id: randomId(), time: randomTime()}];
        setPosts(newPost);
    };

    const addComment = (comment, index) => {
        const updatePosts = [...posts];
        updatePosts[index].comments.push({ text: comment, user: randomName() });
        setPosts(updatePosts);
    }

    const displayPost = posts.map((post, index) => (
        <Post
            key={index}
            index={index}
            status={post.status}
            comments={post.comments}
            time={post.time}
            addComment={addComment}
            id={post.id}
        />
    ))

    return (
        <div className="App">
            <PostForm addPost={addPost} />
            {displayPost} 
        </div>
    );
};

export default App;