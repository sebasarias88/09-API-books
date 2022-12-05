import Header from "../components/Header";
import SearchBook from "../components/SearchBook";
import RenderBooks from "../components/RenderBooks";

export default function Home() {

    return (
        <div className="flex flex-col items-center">
            <Header/>
            <h1 className="my-10 font-black text-4xl">
                A BOOK LIBRARY FOR ALL BOOK LOVERS
            </h1>
            <SearchBook/>
            <RenderBooks/>
        </div>
    )
}