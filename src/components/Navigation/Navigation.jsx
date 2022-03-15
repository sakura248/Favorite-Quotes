import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase-config";
import useAuthStatus from "../../hooks/useAuthStatus";
import "./navigation.css";

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
      {/* --- mobile menu --- */}
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
          className={`
          nav
          fixed top-0 left-0 flex overflow-x-hidden flex-col items-start text-light h-screen transition-width duration-500 ${
            open ? "w-full" : "w-0"
          }`}
        >
          <nav className="flex flex-col text-3xl py-16 px-8 z-50">
            <Link to="/" className="m-4 hover:underline" onClick={toggleMenu}>
              Home
            </Link>
            <Link
              to="/MyAccount"
              className="m-4 hover:underline"
              onClick={toggleMenu}
            >
              Your Posts
            </Link>
            <Link
              to="/MyFavorites"
              className="m-4 hover:underline"
              onClick={toggleMenu}
            >
              Favorites
            </Link>
            {loggedIn && (
              <Link
                to="/"
                className="m-4 hover:underline bg-red"
                onClick={() => {
                  signOut(auth);
                  navigate("/");
                }}
              >
                Sign Out
              </Link>
            )}
          </nav>
        </div>
      </div>

      {/* --- desktop menu --- */}
      <div className="flex justify-between">
        <nav className="flex items-center">
          <Link to="/" className="m-4 hover:underline flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className="mr-1.5"
            >
              <path d="M20 7.093v-5.093h-3v2.093l3 3zm4 5.907l-12-12-12 12h3v10h7v-5h4v5h7v-10h3zm-5 8h-3v-5h-8v5h-3v-10.26l7-6.912 7 6.99v10.182z" />
            </svg>
            Home
          </Link>
          <Link
            to="/MyAccount"
            className="m-4 hover:underline flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className="mr-1.5"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z" />
            </svg>
            Your Posts
          </Link>
          <Link
            to="/MyFavorites"
            className="m-4 hover:underline flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className="mr-1.5"
            >
              <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
            </svg>
            Favorites
          </Link>
          {loggedIn && (
            <Link
              to="/"
              className="m-4 hover:underline flex items-center"
              onClick={() => {
                signOut(auth);
                navigate("/");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="mr-1.5"
              >
                <path d="M16 9v-4l8 7-8 7v-4h-8v-6h8zm-2 10v-.083c-1.178.685-2.542 1.083-4 1.083-4.411 0-8-3.589-8-8s3.589-8 8-8c1.458 0 2.822.398 4 1.083v-2.245c-1.226-.536-2.577-.838-4-.838-5.522 0-10 4.477-10 10s4.478 10 10 10c1.423 0 2.774-.302 4-.838v-2.162z" />
              </svg>
              Sign Out
            </Link>
          )}
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
