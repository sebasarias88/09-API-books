import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

export default function RenderBooks(){
    const {books} = useSelector(state => state.books)

    return(
        <div className="p-10 flex gap-4 flex-wrap w-screen">
            {books.map((book) => (
                <div
                    className="flex flex-col items-center bg-gray-400/20 rounded-lg p-10 w-72 hover:shadow-lg"
                    key={book.id}>
                    <img className="rounded-lg w-32 h-44"
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
    )
}

