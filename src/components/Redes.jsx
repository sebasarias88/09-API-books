import {FaShare} from "react-icons/fa";
import {BsFacebook, BsInstagram, BsTwitter, BsWhatsapp} from "react-icons/bs";

export default function Redes(){

    return (
        <div>
            <div className="flex ml-10">
                <h2 className="flex text-green-900 h-4 hover:underline cursor-pointer">
                    <span className="mr-2 mt-1"><FaShare/></span>
                    Share
                </h2>
                <h2 className="flex ml-8 hover:cursor-pointer text-green-600 animate-bounce">
                    <a href="https://api.whatsapp.com/send?phone=3016611852&text=Hola%20me%20interesa%20mas%20sobre%20este%20libro%20"><BsWhatsapp/></a>
                </h2>
                <h2 className="flex ml-4 hover:cursor-pointer text-blue-600 animate-bounce">
                    <a href="https://www.facebook.com/Sebasarias88?mibextid=LQQJ4d"><BsFacebook/></a>
                </h2>
                <h2 className="flex ml-4 hover:cursor-pointer text-pink-600 animate-bounce">
                    <a href="https://www.instagram.com/SebasArias88/"><BsInstagram/></a>
                </h2>
                <h2 className="flex ml-4 hover:cursor-pointer text-blue-500 animate-bounce">
                    <a href="https://twitter.com/SebasArias88"><BsTwitter/></a>
                </h2>
            </div>
            <div className="flex text-xs text-gray-500 ml-10 mt-4">
                <p className="hover:underline cursor-pointer">
                    Recommend It
                </p>
                <p className="ml-2">
                    |
                </p>
                <p className="ml-2 hover:underline cursor-pointer">
                    Stats
                </p>
                <p className="ml-2">
                    |
                </p>
                <p className="ml-2 hover:underline cursor-pointer">
                    Recent Status Updates
                </p>
            </div>
            <div className="ml-10 mt-8">
                <p>
                    <b>READERS ALSO ENJOYED</b>
                </p>
            </div>
            <div className="ml-10 h-3/6">
            </div>
            <div className="ml-48 mt-32 text-sm text-green-900 cursor-pointer hover:underline">
                <p>
                    <b>See similar books...</b>
                </p>
            </div>
        </div>
    )
}