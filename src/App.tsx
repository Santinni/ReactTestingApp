import "./App.css";
import "./styles/sb-admin-2.css";

import { FC } from "react";

import Admin from "@/components/Admin/Admin";

import { ModalContextProvider } from "./common/components/ModalContext";

const App: FC = () => {
  return (
    <div className="App" id="wrapper">
      <ModalContextProvider>
        <Admin />
      </ModalContextProvider>
    </div>
  );
};

export default App;
