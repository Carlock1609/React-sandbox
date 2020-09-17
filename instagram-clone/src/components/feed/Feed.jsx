import React, { useState } from 'react';

import FeedCard from './FeedCard';


const dummyPosts = [
    {
        name: 'JonYates906',
        image: 'https://images.unsplash.com/photo-1514315384763-ba401779410f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=660&q=80',
        likes: '232,999',
        comment_count: '3,809',
        discription: 'Just jumped outta bed..',
        comments: [
            {
                name: 'KloeK33',
                comment: 'What!?!?!'
            },
            {
                name: 'MJay23',
                comment: 'Thats awesome YOO!'
            }
        ],
        time: '58'
    },
    {
        name: 'Coolkat9',
        image: 'https://images.unsplash.com/photo-1529903056346-94341d9428e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=802&q=80',
        likes: '106,200',
        comment_count: '1,069',
        discription: 'I like taking photos.',
        comments: [
            {
                name: 'RamboYo2',
                comment: 'I need this!'
            },
            {
                name: 'KY906',
                comment: 'You Ugly af'
            }
        ],
        time: '10'
    },
    {
        name: 'Carlock1609',
        image: 'https://images.unsplash.com/photo-1556683944-ba658344ba06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        likes: '58,200',
        comment_count: '500',
        discription: 'This is random? haha yeah',
        comments: [
            {
                name: 'Loser123',
                comment: 'Your posts all suck!'
            },
            {
                name: 'Kayne222',
                comment: 'Get a real job!'
            }
        ],
        time: '30'
    },
];

const Feed = () => {
    const [posts, setPosts] = useState(dummyPosts)
    
    const displayPosts = posts.map((post) => {
        console.log(post)
        return <FeedCard key={post.name} post={post} />
    })

    return (
        <div className="Feed">
            <div className="feed-header">
                This is the header
            </div>
            <div className="feedcard-container">
                {displayPosts}
            </div>
        </div>
    );
};

export default Feed;