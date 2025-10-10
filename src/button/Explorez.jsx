import {Link} from "react-router-dom";

function Explorez ({to, text = "Explorez"}){
    return(
        <div className="absolute bottom-6 right-6">
        <Link to={to} className="bg-gradient-to-r from-blue-700 to-indigo-500 text-white px-6 py-3 rounded-2xl font-bold shadow-lg hover:scale-105 transition-transform duration-300">
            {text}
        </Link>
        </div>
    )
}

export default Explorez;