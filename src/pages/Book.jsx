import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {AiFillStar} from 'react-icons/ai'
import Header from "../components/Header";
import Redes from "../components/Redes";
import BookReview from "../components/BookReview";
import {useState} from "react";

export default function Book() {
    const {bookId} = useParams()
    const {books} = useSelector(state => state.books)
    const newBook = books.filter(book => (book.id === bookId))

    const [description, setDescription] = useState(true);

    function handleClick() {
        setDescription(!description)
    }

    return (
        <div>
            <Header/>
            <div className="flex p-10">
                <div className="flex flex-col">
                    <img className="rounded-lg w-44 h-52"
                         src={newBook[0].cover} alt="book image"/>
                    <button className="mt-4 bg-green-600 text-white hover:bg-green-700">
                        Want to read
                    </button>
                    <p className="text-center text-xs mt-1">
                        Rate this book
                    </p>
                    <p className="flex justify-center mt-1 hover:text-orange-800">
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                    </p>
                </div>
                <div
                    className="flex flex-col ml-12 w-3/6">
                    <h1 className="text-4xl font-bold">
                        {newBook[0].title}
                    </h1>
                    <p className="mt-2">
                        <b>Author: </b>{newBook[0].author}
                    </p>
                    <h3 className="text-sm mt-4 mb-4 text-justify">
                        {
                            description
                                ?
                                <p>{newBook[0].info.length < 445
                                    ? newBook[0].info
                                    : newBook[0].info.substring(0, 445)}</p>
                                :
                                <p>{newBook[0].info}</p>
                        }
                        {
                            newBook[0].info.length > 445 &&
                            <button className="text-green-900 hover:underline text-xs"
                                    onClick={handleClick}>
                                {description ? "Read More..." : "Read Less"}
                            </button>
                        }

                    </h3>
                    <hr className="h-0.5 bg-red-900"/>
                    <p className="mt-4">
                        GET A COPY
                    </p>
                    <div className="flex mt-4 text-sm">
                        <button className="bg-gray-300 mr-4 p-2 hover:bg-gray-400">
                            Amazon
                        </button>
                        <button className=" bg-gray-300 mr-4 p-2 hover:bg-gray-400">
                            Online Store
                        </button>
                        <button className="bg-gray-300 p-2 hover:bg-gray-400">
                            Libraries
                        </button>
                    </div>
                    <hr className="mt-4 h-0.5 bg-red-900"/>
                    <div className="text-xs">
                        <p className="mt-2">
                            {newBook[0].page} pages
                        </p>
                        <h2 className="">
                            Published Date: {newBook[0].publishedDate}
                        </h2>
                        <p className="mt-1 text-green-900 hover:underline">
                            <a href="https://play.google.com/store/books">More details...</a>
                        </p>
                    </div>
                </div>
                <Redes/>
            </div>
            <BookReview newBook={newBook[0]}/>
        </div>
    )
}
