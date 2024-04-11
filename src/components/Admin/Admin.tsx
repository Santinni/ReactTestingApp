import { FC } from "react";

import Characters from "../Characters/Characters";
import LeftMenu from "../LeftMenu/LeftMenu";
import TopMenu from "../TopMenu/TopMenu";

const Admin: FC = () => {
  return (
    <>
      <LeftMenu />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <TopMenu />
          <div className="container-fluid">
            <Characters />
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
