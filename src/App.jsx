
import { useState } from 'react';
import './App.css'
import Blogs from './components/Blogs/Blogs';
import BookMarks from './components/BookMarks/BookMarks';
import Header from './components/Header/Header';

function App() {

  const [bookMarkes , setBookMarkes] = useState([]);
  const [readMarkedTime , setReadMarkedTime] = useState(0);
  const handleBookMared = blog => {
    const newBlog = [...bookMarkes , blog];
    setBookMarkes(newBlog);
  }

  const handleReadMarkedTime = (time , id) => {
    setReadMarkedTime(readMarkedTime + time);
    const remainingBlog = bookMarkes.filter(bookMark => bookMark.id !== id);
    setBookMarkes(remainingBlog);

  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-5xl mx-auto'>
      <Blogs handleBookMared={handleBookMared} handleReadMarkedTime={handleReadMarkedTime}></Blogs>
      <BookMarks bookMarkes={bookMarkes} readMarkedTime={readMarkedTime}></BookMarks>
      </div>
      
    </>
  )
}

export default App;
