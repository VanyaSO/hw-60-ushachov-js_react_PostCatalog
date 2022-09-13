import React from "react";

class PostCatalog extends React.Component{

    render() {
        const { posts } = this.props;

        return (
            <ul className="posts__list">
                {posts.map((post) => (
                    <li key={posts.id} className="posts_single-post" data-post-id="Id поста">
                        <h3 className="posts__post-title">{post.title}</h3>
                        <p className="posts__post-description">{post.body}</p>
                    </li>
                ))}
            </ul>
        );
    }

}

export default PostCatalog;
