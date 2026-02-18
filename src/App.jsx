import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";

/*
  IMPORTANTE: inline styles não respondem a CSS variables nem a [data-theme].
  Por isso o main e o container agora usam classes CSS definidas em theme.css.
  As classes .app-main e .app-container correspondem exatamente ao visual anterior.
*/

export default function App() {
  return (
    <>
      <Header />
      <main className="app-main">
        <div className="app-container">
          <Outlet />
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
