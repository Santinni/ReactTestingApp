import "./TopMenu.css";

import { FC } from "react";

import { useModalContext } from "@/components/Modal/ModalContext";

import TopMenuAccount from "./TopMenuAccount";

const TopMenu: FC = () => {
  const { setModal, openModal } = useModalContext();

  const openHelp = () => {
    setModal(
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut
        molestie dui. Duis accumsan eros sapien, quis porttitor nisi eleifend
        ut. Maecenas sed convallis ante. In pretium libero odio. Fusce orci
        turpis, semper nec justo sed, rhoncus ultricies velit. Aliquam nulla
        tortor, tincidunt nec felis eget, pulvinar tincidunt velit. Cras mollis
        ultrices metus vulputate gravida. Proin vel dolor egestas, pretium nibh
        bibendum, faucibus leo. Integer et ligula sit amet tortor tempor
        molestie. Fusce faucibus tincidunt suscipit.
      </p>
    );
    openModal();
  };

  return (
    <nav className="navbar navbar-expand navbar-light bg-custom-dark topbar mb-4 static-top shadow">
      <ul className="navbar-nav ml-auto">
        <button
          type="button"
          className="btn toggle-button d-flex align-items-center"
          onClick={openHelp}
          style={{ width: "80px" }}
          aria-label="Open help information"
        >
          <i className="fas fa-info mr-2"></i>
          HELP
        </button>
        <div className="topbar-divider d-none d-sm-block"></div>
        <TopMenuAccount />
      </ul>
    </nav>
  );
};

export default TopMenu;
