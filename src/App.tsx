import React from "react";
import "./App.css";
import "./styles/sb-admin-2.css";
import Admin from "./components/Admin/Admin";
import {ModalContextProvider} from "./common/components/ModalContext";

const App: React.FC = () => {
  return (
    <div className="App" id="wrapper">
      <Admin />
    </div>
  );
};

export default App;
