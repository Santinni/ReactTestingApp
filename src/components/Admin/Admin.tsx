import React, { Fragment } from "react";
import LeftMenu from "../LeftMenu/LeftMenu";
import TopMenu from "../TopMenu/TopMenu";
import Characters from "../Characters/Characters";

const Admin: React.FC = () => {

  return (
    <Fragment>
      <LeftMenu />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <TopMenu />
          <div className="container-fluid">
            <Characters />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Admin;
