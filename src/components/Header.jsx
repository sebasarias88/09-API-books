import {Link} from "react-router-dom";
import {FiChevronDown} from "react-icons/fi";

export default function Header() {

    return (
        <header className="flex justify-between items-center bg-red-800 p-4 w-screen">
            <p className="text-4xl text-white">
                BookLibrary
            </p>
            <p className="cursor-pointer text-white ml-6">
                <Link to={'/'}> Home</Link>
            </p>
            <p className="flex items-center cursor-pointer text-white">
                Books<FiChevronDown/>
            </p>
            <p className="flex items-center cursor-pointer text-white">
                Browse<FiChevronDown/>
            </p>
            <p className="flex items-center cursor-pointer text-white">
                Ranking books<FiChevronDown/>
            </p>
            <button className="bg-white p-2 rounded-md text-sm hover:bg-gray-200">
                <Link to={'/login'}>Sign Up</Link>
            </button>
        </header>
    )
}