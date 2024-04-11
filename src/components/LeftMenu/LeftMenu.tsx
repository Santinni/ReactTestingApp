import { FC, useState } from "react";

const LeftMenu: FC = () => {
  const [leftMenuVisibility, setLeftMenuVisibility] = useState(false);

  function changeLeftMenuVisibility() {
    setLeftMenuVisibility(!leftMenuVisibility);
  }

  function getCollapseClass() {
    return leftMenuVisibility ? "" : "collapsed";
  }

  return (
    <>
      <div className="toggle-area">
        <button
          className="btn btn-primary toggle-button"
          onClick={() => changeLeftMenuVisibility()}
          type="button"
          aria-label="Toggle menu"
        >
          <i className="fas fa-bolt"></i>
        </button>
      </div>

      <ul
        className={`navbar-nav bg-gradient-primary-green sidebar sidebar-dark accordion ${getCollapseClass()}`}
        id="collapseMenu"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon icon-green rotate-n-15">
            <i className="fas fa-bolt"></i>
          </div>
          <div className="sidebar-brand-text mx-3">
            REACT <sup>Admin</sup>
          </div>
        </a>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item active">
          <a className="nav-link" href="index.html">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </a>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Menu</div>

        <li className="nav-item">
          <a className="nav-link" href="index.html">
            <i className="fas fa-fw fa-user"></i>
            <span>Characters</span>
          </a>
        </li>

        <hr className="sidebar-divider" />
      </ul>
    </>
  );
};

export default LeftMenu;
