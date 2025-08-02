import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import Header from "../components/Header/Header";
import ProductHeader from "../components/ProductHeader/ProductHeader";
import Footer from "../components/Footer/Footer";

function Layout() {
  const location = useLocation();
  const isProductPage = location.pathname.startsWith("/product");

  return (
    <>
      {isProductPage ? <ProductHeader /> : <Header />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
