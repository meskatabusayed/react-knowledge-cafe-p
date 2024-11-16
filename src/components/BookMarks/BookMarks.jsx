import BookMark from "../BookMark/BookMark";


const BookMarks = ({bookMarkes , readMarkedTime}) => {
    return (
        <div className="md:w-1/3 ml-8 bg-gray-300 p-4 mt-4">
            <div>
                <p>Spent Time on Read {readMarkedTime} min</p>
            </div>
            <h1 className="text-center">Book Marks : {bookMarkes.length}</h1>
            <div>
                {
                    bookMarkes?.map(bookmark => <BookMark key={bookmark.id}
                    bookmark={bookmark}
                    ></BookMark>)
                }
            </div>
        </div>
    );
};

export default BookMarks;