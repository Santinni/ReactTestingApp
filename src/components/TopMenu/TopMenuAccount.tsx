import React from "react";

function TopMenuAccount(): JSX.Element {
  return (

    <li className="nav-item dropdown no-arrow">
      <span className="nav-link">
        <span className="mr-2 d-none d-lg-inline small cadet">fakeemail@gmail.com</span>
        <img className="img-profile rounded-circle" alt=""
          src="https://source.unsplash.com/QAB-WJcbgJk/60x60" />
      </span>
    </li>
  );
}

export default TopMenuAccount;
