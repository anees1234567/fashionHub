import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";



const MainLayout = () => {
  return (
  <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-1 p-4 md:p-6 pt-16 md:pt-16 mt-6">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default MainLayout;
