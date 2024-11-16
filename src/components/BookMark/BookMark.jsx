

const BookMark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="bg-slate-400 mt-2 p-4 rounded-md" >
            <h1>{title}</h1>
        </div>
    );
};

export default BookMark;