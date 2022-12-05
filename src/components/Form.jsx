import {useState} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {addBook} from "../store/slices/books/booksSlice";
import {Link} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Form() {

    const [data, setData] = useState(null)
    const [inputValue, setInputValue] = useState("")
    //const [books, setBooks] = useState([])

    const {books} = useSelector(state => state.books)
    const dispatch = useDispatch();

    const handleSuggestionClick = (id) => {
        const current = data.items.filter(book => (book.id === id))
        const currentBook = {
            id: current[0].id,
            title: current[0].volumeInfo.title,
            author: current[0].volumeInfo.authors[0],
            publishedDate: current[0].volumeInfo.publishedDate,
            cover: current[0].volumeInfo.imageLinks.thumbnail,
            info: current[0].volumeInfo.description,
            page: current[0].volumeInfo.pageCount
        }
        //setBooks([currentBook, ...books])
        dispatch(addBook(currentBook))
        setData([])
        setInputValue("")
    }

    const getData = async (value) => {
        try {
            const resp = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${value}&key=${process.env.REACT_APP_API_MAPS}`)
            setData(resp.data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setData(e.target.value)
    }

    const inputChange = (e) => {
        setInputValue(e.target.value)
        if (e.target.value.trim() !== "") {
            getData(e.target.value)
        } else {
            setData(null)
        }
    }

    return (
        <div>
            <Header/>
            <div className="flex flex-col items-center">
                <h1 className="mt-10 font-black text-4xl">
                    A BOOK LIBRARY FOR ALL BOOK LOVERS
                </h1>
                <form className="relative" onSubmit={handleSubmit}>
                    <input
                        autoFocus={true}
                        className="rounded-lg mt-20 px-2 mr-6 p-0.5"
                        type="text"
                        placeholder="Write the book"
                        value={inputValue}
                        onChange={inputChange}
                    />
                    <button
                        className="bg-red-700 px-2 rounded-lg p-0.5 text-white"
                        type="submit"
                    >Search
                    </button>
                    {
                        inputValue &&
                        <div className="absolute top-full">
                            <ol className="text-center">
                                {
                                    data && data.items && data.items.map(item => (
                                        <li className="flex mt-4 w-3/6"
                                            key={item.id}
                                            onClick={() => handleSuggestionClick(item.id)}>
                                            {item.volumeInfo.title}
                                        </li>
                                    ))}
                            </ol>
                        </div>
                    }
                </form>
            </div>
            <div className=" mt-20 p-10 flex gap-4 flex-wrap">
                {books.map((book) => (
                    <div
                        className="flex flex-col items-center bg-gray-400/20 rounded-lg p-10 w-3/12 hover:shadow-lg"
                        key={book.id}>
                        <img className="rounded-lg w-32 h-44 "
                             src={book.cover} alt="book image"
                        />
                        <h1 className="text-center text-xl font-bold mt-6">
                            {book.title}
                        </h1>
                        <h2 className="mt-2 text-center">
                            <b>Published Date:</b> {book.publishedDate}
                        </h2>
                        <p className="mt-1 text-center">
                            <b>Author:</b>{book.author}
                        </p>
                        <p className="underline mt-6">
                            <Link to={`/book/${book.id}`}><b>More information</b></Link>
                        </p>
                    </div>
                ))}
            </div>
            <Footer/>
        </div>

    )
}
