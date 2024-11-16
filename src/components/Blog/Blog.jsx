import { IoBookmarks } from "react-icons/io5";

const Blog = ({blog , handleBookMared , handleReadMarkedTime}) => {
    const {id ,cover , title , author, author_image , posted_date, reading_time , hashtags} = blog;
    return (
        <div className="mb-20">
            <img className="w-full" src={cover} alt="" />
            <div className="flex justify-between mt-5">
                <div className="flex">
                    <img className="w-14 rounded-full object-cover" src={author_image} alt="" />
                    <div className="ml-4">
                        <h1 className="font-bold">{author}</h1>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <div className="flex"> 
                        <div>
                        <p>{reading_time} min read</p>
                        </div>
                        <div className="ml-2 text-blue-500">
                        <button onClick={() => handleBookMared(blog )}><IoBookmarks /></button>
                        </div>
                    </div>
                    
                </div>
            </div>
            <h1 className="text-6xl mt-5">{title}</h1>
            <p className="my-5">{
                 
                 hashtags?.map((hash , idx) => <span key={idx}> <a href="">{hash}</a> </span>)

                }
            </p>
            <button onClick={() => handleReadMarkedTime(reading_time , id)} className="underline text-purple-500">Mark as read</button>
        </div>
    );
};

export default Blog;