import React from "react";
import "../styles/Layout.css";
import Header from "./Header.jsx";
// import PageHeader from "../PageHeader.jsx";
import PageHeader from "../PageHeader.jsx";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      {/* Header */}
      <Header />
      <PageHeader />
      {/* Main Content */}
      <main className="main-content">{children}</main>
    </div>
  );
};

export default Layout;
