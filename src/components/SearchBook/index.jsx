import {useState} from "react";
import axios from "axios";
import {addBook} from "../../store/slices/books/booksSlice";
import {useDispatch} from "react-redux";

export default function SearchBook() {
    const [data, setData] = useState(null)
    const [inputValue, setInputValue] = useState("")
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
        <form className="relative" onSubmit={handleSubmit}>
            <input
                autoFocus={true}
                className="rounded-lg  px-2 mr-6 p-0.5"
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
    )
}