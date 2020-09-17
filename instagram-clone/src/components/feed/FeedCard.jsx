import React from 'react';

const FeedCard = ({ post }) => {
    return (
        <div className="FeedCard">
            <header className="feedcard-header">
                <img className="feedcard-header-img" src={post.image} alt="" />
                <span className="ml-2"><strong>{post.name}</strong></span>
            </header>
            <img className="feedcard-img" src={post.image} alt=""/>
            <footer className="feedcard-footer-container pl-2">
                <div className="feed-footer-icon-container">
                    <span className="feed-footer-icon"><i className="nav-icon far fa-heart"></i></span>
                    <span className="feed-footer-icon"><i className="far fa-comment-dots"></i></span>
                    <span className="feed-footer-icon"><i className="nav-icon far fa-paper-plane"></i></span>
                    <span className="feed-footer-icon ml-auto mr-2"><i className="far fa-bookmark"></i></span>
                </div>
                <div><strong>{post.likes} likes</strong></div>
                <div><strong>{post.name}</strong><span className="ml-2">{post.discription}</span></div>
                <p className="footer-view-comments mb-0">View all {post.comment_count} comments</p>
                <div><strong>{post.comments[0].name}</strong><span className="ml-1">{post.comments[0].comment}</span></div>
                <div><strong>{post.comments[1].name}</strong><span className="ml-1">{post.comments[1].comment}</span></div>
                <p className="footer-post-time mb-0">{post.time} MINUTES AGO</p>
            </footer>
                <div className="footer-comment-box">
                    <div className="ml-3">Add a comment...</div>
                    <div className="ml-auto mr-3"><a href="#ink">Post</a></div>
                </div>
        </div>
    );
};

export default FeedCard;

