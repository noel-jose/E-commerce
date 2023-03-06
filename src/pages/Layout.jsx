import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Notification from "../components/Notification/Notification";
import { useContext, useEffect } from "react";
import { ProductContext } from "../App";

const Layout = () => {
  const { isVisible, notification } = useContext(ProductContext);
  return (
    <>
      <Header />
      {isVisible && <Notification text={notification} />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
