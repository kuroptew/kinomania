import { Outlet } from "react-router-dom";
import Header from "@/components/header/Header";

function BaseLayout() {
  return (
    <>
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}

export default BaseLayout;