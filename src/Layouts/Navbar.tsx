import { useState } from "react";
import { FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";
import { useAuth } from "../Auth/useAuth";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { userData } = useAuth()
    const navigate = useNavigate()

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm px-4 sm:px-8 py-4">
            <div className="flex justify-between items-center w-full">
                <div className="flex items-center justify-between w-full sm:w-auto">
                    <div className="text-2xl font-bold text-blue-900 italic">FashionHub</div>
                    <button
                        className="sm:hidden text-blue-900 text-2xl"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                <ul
                    className={`${isMenuOpen ? "flex" : "hidden"
                        } sm:flex flex-col sm:flex-row absolute sm:static top-16 left-4 sm:left-0 w-full sm:w-auto bg-white sm:bg-transparent px-4 sm:px-0 py-4 sm:py-0 space-y-4 sm:space-y-0 sm:space-x-8 text-blue-900 font-medium transition-all duration-300 ease-in-out`}
                >
                    <li>
                        <Link to="/user/products" className="cursor-pointer hover:text-blue-600">
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link to="/user/brand" className="cursor-pointer hover:text-blue-600">
                            Brand
                        </Link>
                    </li>
                    <li>
                        <Link to="/user/contact" className="cursor-pointer hover:text-blue-600">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link to="/user/faqs" className="cursor-pointer hover:text-blue-600">
                            FAQ's
                        </Link>
                    </li>
                    <li>
                        <Link to="/login" className="cursor-pointer hover:text-blue-600">
                            logOut
                        </Link>
                    </li>
                </ul>

                <div className="hidden sm:flex items-center space-x-6">
                    <div onClick={() => navigate("/user/cart")} className="relative">
                        <FaShoppingBag className="text-2xl text-blue-900 cursor-pointer" />
                        <span className="absolute -top-2 -right-2 bg-blue-900 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                            3
                        </span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <img
                            onClick={() => navigate("/user/profile")}
                            src="https://www.sheridanbowles.co.uk/wp-content/uploads/2023/04/avatar-1.jpg"
                            alt="profile"
                            className="w-10 h-10 rounded-full object-cover cursor-pointer"
                        />
                        <div className="text-sm leading-tight">

                            <p className="font-semibold text-blue-900">{userData?.name}</p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
