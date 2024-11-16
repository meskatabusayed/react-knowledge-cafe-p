import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handleBookMared , handleReadMarkedTime}) => {
    const [blogs , setBlogs] = useState([]);
    useEffect(() => {
        fetch("blogs.json")
        .then(res => res.json())
        .then(data => setBlogs(data));
    } , [])

    return (
        <div className="md:w-2/3">
            <h1>Blogs : {blogs.length}</h1>
            <div>
                {
                    blogs?.map(blog => <Blog key={blog.id} blog={blog}
                        handleBookMared={handleBookMared}
                        handleReadMarkedTime={handleReadMarkedTime}
                    ></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;