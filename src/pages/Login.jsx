import {Link} from "react-router-dom";

export default function Login() {


    return (
        <div>
            <button className="pl-8 py-4">
                <Link to={'/'}>Back</Link>
            </button>
            <div className="flex justify-center items-center w-screen h-screen">
                <div className="py-8 px-16 rounded-2xl text-center bg-gray-400/20 shadow-xl">
                    <h1 className="text-4xl mb-20">
                        Sing in
                    </h1>
                    <div className="flex flex-col w-4/6">
                        <input className="mb-10 p-1 border-b-2 outline-none w-72 rounded-lg"
                               type="text" placeholder="Email"/>
                        <input className="border-b-2 p-1 outline-none w-72 rounded-lg"
                               type="password" placeholder="Password"/>
                        <p className="mr-10 text-sm hover:cursor-pointer text-orange-800 hover:underline">
                            Forgot your password?
                        </p>
                        <button className="mt-20 w-24 ml-24 bg-red-900 p-1 rounded-lg text-white hover:bg-red-700">
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

}