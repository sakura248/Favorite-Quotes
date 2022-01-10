import React from 'react'
import {
  Link
} from "react-router-dom";

const Navigation = () => {
  return (
    <div className="mb-10">
        <div className="flex">
            <Link to="/" className="title text-5xl font-bold text-right">FAVORITE<br />QUOTES</Link>
            <nav className="flex items-center">
                {/* <Link to="/MyAccount" className="m-4 hover:underline">My Account</Link> */}
                <Link to="/Login" className="m-4 hover:underline">Login</Link>
                <Link to="/MyAccount" className="m-4 hover:underline">My Account（仮）</Link>
                <Link to="/MyFavorites" className="m-4 hover:underline">My Favorites</Link>
                <form className="flex  items-center">
                    <input type="text" className="border-b border-black bg-transparent"/>
                    <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 8h-8v-1h8v1zm0 2h-8v-1h8v1zm-3 2h-5v-1h5v1zm11.172 12l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z"/></svg></button>
                </form>
            </nav>
        </div>
    </div>
  )
}

export default Navigation
