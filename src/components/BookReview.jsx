import {Link} from "react-router-dom";

export default function BookReview({newBook}){


    return(
        <div className="mt-4 p-10 text-sm w-9/12">
            <h2 className="mb-2 text-yellow-900">
                FRIEND REVIEWS
            </h2>
            <hr className="h-0.5 bg-red-900"/>
            <p className="mt-1">
                To see what your friends thought of this book, <a
                className="text-green-900 hover:underline cursor-pointer"><Link to={'/login'}>please sign up.</Link></a>
            </p>
            <h2 className="mt-8 mb-2 text-yellow-900">
                READER Q&A
            </h2>
            <hr className="h-0.5 bg-red-900"/>
            <p className="mt-1">
                To ask other readers questions about <b>{newBook.title}</b>, <a
                className="text-green-900 hover:underline cursor-pointer"> <Link to={'/login'}>please sign
                up.</Link></a>
            </p>
        </div>
    )
}