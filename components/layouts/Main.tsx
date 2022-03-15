import React, { ReactNode } from "react";
import Header from "../HeaderTop";
import Sidebar from "../Sidebar";
type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <div>
    <Header />
    <div className="container">
      {props.children}
    </div>

  </div>

);

export default Layout;
