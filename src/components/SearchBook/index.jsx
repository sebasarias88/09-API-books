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
        if(!data){
            alert("This book is not available")
        }
        const currentBook = {
            id: current[0].id ? current[0].id : "Is not available",
            title: current[0].volumeInfo.title ? current[0].volumeInfo.title : "Is not available",
            author: current[0].volumeInfo.authors ? current[0].volumeInfo.authors[0] : "The author is not available",
            publishedDate: current[0].volumeInfo.publishedDate ? current[0].volumeInfo.publishedDate : "The published date is not available",
            cover: current[0].volumeInfo.imageLinks ? current[0].volumeInfo.imageLinks.thumbnail : "https://cdn.imprentaonline.net/media/catalog/product/cache/af1f7de92a59ee4a26553b36df22c777/w/h/whatsapp_image_2021-01-27_at_11.49.48.jpeg",
            info: current[0].volumeInfo.description ? current[0].volumeInfo.description : "The description is not available",
            page: current[0].volumeInfo.pageCount ? current[0].volumeInfo.pageCount : "The pages is not available"
        }
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
        <form className="relative"
              onSubmit={handleSubmit}>
            <input
                autoFocus={true}
                className="px-4 mr-6 py-2 w-80 outline-none bg-gray-50 rounded-2xl"
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
                <div
                    className="absolute bg-gray-100/90 backdrop-blur-sm shadow-2xl rounded-2xl w-80 h-80 overflow-y-scroll">
                    <ol className="text-center">
                        {
                            data && data.items && data.items.map(item => (
                                <li className="px-2 py-3 hover:bg-white hover:cursor-pointer text-left text-sm"
                                    key={item.id}
                                    onClick={() => handleSuggestionClick(item.id)}>
                                    <b>{item.volumeInfo.title}</b>
                                </li>
                            ))}
                    </ol>
                </div>
            }
        </form>
    )
}