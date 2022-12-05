import Home from "./Home";
import Book from "./Book";
import Login from "./Login";

const pagesData = [
    {
        path: "",
        element: <Home/>,
        title: "home"
    },
    {
        path: "book/:bookId",
        element: <Book/>,
        title: "book"
    },
    {
        path: "login",
        element: <Login/>,
        title: "login"
    }
]

export default pagesData;