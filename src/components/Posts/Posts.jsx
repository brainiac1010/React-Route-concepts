import { useLoaderData } from "react-router-dom";
import Post from "../post/Post";

const Posts = () => {

    const posts = useLoaderData();
    return (
        <div>
            <h2>
            posts count:{posts.length}
            </h2>
           <div className="Users">
            {
                posts.map(post=> <Post key={Post.Id} post={post}></Post>)
            }
           </div>
        </div>
    );
};

export default Posts;