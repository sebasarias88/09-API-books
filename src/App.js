import './App.css';
import {Route, Routes} from "react-router-dom";
import Book from "./pages/Book";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {

    return (
        <div className="bg-white w-full h-full overflow-scroll">
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/book/:bookId' element={<Book/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </div>
    );
}

export default App;

