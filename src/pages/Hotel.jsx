import Navbar from '../Top/navbar.jsx';

export default function Hotel() {
    return (
        <>
        <Navbar/>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
            <h1 className="text-4xl font-bold text-white">Page des Hôtels</h1>
        </div>
        </>
    );
}