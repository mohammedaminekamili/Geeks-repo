import data from "./data.json";

const PostList = () => {
    // No need to parse! 'data' is already a JS object.


    return (
        <>
            <h2>Post List</h2>
            {/* If your JSON is an array, you can map it here: */}
            {data.map((post) => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                </div>
            ))}
        </>
    );
}

export default PostList;