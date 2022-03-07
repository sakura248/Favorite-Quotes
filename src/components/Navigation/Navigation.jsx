import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import useAuthStatus from "../../hooks/useAuthStatus";
import { auth } from "../../firebase-config";

function Navigation() {
  // const auth = getAuth()
  const { loggedIn } = useAuthStatus();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <div className="">
      {/* mobile menu */}
      <div className="sm:hidden z-50">
        <button
          type="button"
          className="w-10 h-10 relative top-3 left-3 cursor-pointer z-50"
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <div className="block absolute">
            <span
              aria-hidden="true"
              className={`w-9 h-1 absolute transform transition duration-500 ease-in-out ${
                open ? "rotate-45 bg-light" : "-translate-y-1.5 bg-stroke"
              }`}
            />
            <span
              aria-hidden="true"
              className={`bg-stroke w-9 h-1 absolute transform  transition duration-500 ease-in-out ${
                open ? "-rotate-45 bg-light" : "translate-y-1.5 bg-stroke"
              }`}
            />
          </div>
        </button>
        <div
          className={`fixed top-0 left-0 flex overflow-x-hidden flex-col items-start bg-dark-glass backdrop-blur text-light h-screen transition-width duration-500 ${
            open ? "w-full" : "w-0"
          }`}
        >
          <nav className="flex flex-col text-3xl py-16 px-8 z-50">
            <form className="flex items-center ml-4 mb-5 justify-around">
              <input
                type="text"
                className="border-b border-light bg-transparent text-3xl box-border w-full mb-"
              />
              <button type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  style={{ fill: "#F3F3F3" }}
                >
                  <path d="M13 8h-8v-1h8v1zm0 2h-8v-1h8v1zm-3 2h-5v-1h5v1zm11.172 12l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z" />
                </svg>
              </button>
            </form>
            <Link to="/MyAccount" className="m-4 hover:underline">
              Account
            </Link>
            <Link to="/MyFavorites" className="m-4 hover:underline">
              Favorites
            </Link>
            {
              loggedIn && (
                <Link
                  className="m-4"
                  to="/"
                  onClick={() => {
                    signOut(auth);
                    navigate("/");
                  }}
                >
                  Sign Out
                </Link>
              )
              // :
              // `Logged out`
            }

            {/* {
                loggedIn ?
                (<Link as='div' onClick={() => {auth.signOut();navigate('/')}}> Sign Out </Link>)
                :
                <Link to="/Login" className="m-4 hover:underline">Login</Link>
              } */}
          </nav>
        </div>
      </div>
      <div className="flex">
        {/* Desktop */}
        <nav className="flex items-center">
          <Link to="/MyAccount" className="m-4 hover:underline">
            Account
          </Link>
          <Link to="/MyFavorites" className="m-4 hover:underline">
            Favorites
          </Link>
          {
            loggedIn && (
              <Link
                to="/"
                onClick={() => {
                  signOut(auth);
                  navigate("/");
                }}
              >
                Sign Out
              </Link>
            )
            // :
            // `Logged out`
          }

          {/* {
                loggedIn ?
                (<Link as='div' onClick={() => {auth.signOut();navigate('/')}}> Sign Out </Link>)
                :
                <Link to="/Login" className="m-4 hover:underline">Login</Link>
              } */}
          <form className="flex  items-center">
            <input
              type="text"
              className="border-b border-black bg-transparent"
            />
            <button type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M13 8h-8v-1h8v1zm0 2h-8v-1h8v1zm-3 2h-5v-1h5v1zm11.172 12l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z" />
              </svg>
            </button>
          </form>
        </nav>
        <Link to="/" className="title text-5xl font-bold text-right">
          FAVORITE
          <br />
          QUOTES
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
