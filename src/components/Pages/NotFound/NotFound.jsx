import React from "react";
import Header from "../../Header/Header";

function NotFound() {
  return (
    <div className="mt-24 sm:mt-16 mx-auto w-11/12 sm:container">
      <Header header="404" />
      <div className="mx-auto flex flex-col items-center">
        <p className="mb-4">Oups! Page Not Found</p>
        <img
          className="mx-auto"
          src="https://media.giphy.com/media/AYMzMAgZIci8IgezfQ/giphy.gif"
          alt="404"
        />
      </div>
    </div>
  );
}

export default NotFound;
