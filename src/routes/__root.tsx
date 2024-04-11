import { FC } from "react";

import LeftMenu from "@/components/LeftMenu/LeftMenu";
import TopMenu from "@/components/TopMenu/TopMenu";
import { createRootRoute, Outlet } from "@tanstack/react-router";

const Layout: FC = () => {
  return (
    <>
      <LeftMenu />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <TopMenu />
          <div className="container-fluid">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export const Route = createRootRoute({
  component: Layout,
});
