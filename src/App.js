import './App.css';
import Form from "./components/Form";
import {Route, Routes} from "react-router-dom";
import Book from "./pages/Book";
import Login from "./pages/Login";

function App() {

    return (
        <div className="bg-white w-full h-full overflow-scroll">
            <Routes>
                <Route path='/' element={<Form/>}/>
                <Route path='/book/:bookId' element={<Book/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </div>
    );
}

export default App;

