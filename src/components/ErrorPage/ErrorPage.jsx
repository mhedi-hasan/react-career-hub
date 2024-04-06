import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="bg-orange-200 rounded-lg w-72 items-center text-center mx-auto py-5">
            <h2 className="text-2xl mb-2 text-center font-semibold">Oops!!</h2>
            <span className="bg-zinc-300 py-2 px-3 rounded-xl"> <Link to={'/'}>Go back home</Link></span>
        </div>
    );
};

export default ErrorPage;