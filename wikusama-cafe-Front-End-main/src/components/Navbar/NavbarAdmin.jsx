import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BiHomeHeart, BiFoodMenu, BiUser } from "react-icons/bi";
import { IoMenuSharp } from "react-icons/io5";
import { TbBrandAirtable } from "react-icons/tb";

export default function NavbarAdmin() {
  const navigate = useNavigate();

  useEffect(() => {
    // Jika pengguna belum login, arahkan ke halaman login
    if (!localStorage.getItem("logged")) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    // Hapus data dari localStorage
    localStorage.removeItem("logged");
    localStorage.removeItem("users");
    localStorage.removeItem("token");
    localStorage.clear();
    // Navigasi ke halaman login
    navigate("/");
  };
  const MenuNavbar = (e) => {
    let list = document.querySelector("ul");
    if (e.target.name === "menuNavbar") {
      e.target.name = "close";
      list.classList.add("top-[80px]");
      list.classList.add("opacity-100");
    } else {
      e.target.name = "menuNavbar";
      list.classList.remove("top-[80px]");
      list.classList.remove("opacity-100");
    }
  };

  return (
    <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between">
      <div className="flex justify-between items-center">
        <span className="text-2xl font-[Poppins] cursor-pointer">
          <img
            className="h-10 inline"
            src="https://tse3.mm.bing.net/th?id=OIP.YAuqM-T_227N677Jg-PIUwHaJX&pid=Api&P=0&h=180"
            alt="dep Cafe"
          />
                
        </span>
      <span className="text-2xl font-[Poppins] cursor-pointer ml-5">
      dep Cafe  
      </span>
        <span className="text-3xl cursor-pointer mx-2 md:hidden block">
          <IoMenuSharp name="menuNavbar" onClick={MenuNavbar} />
        </span>
      </div>

      <ul className="transp md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
        <li className="mx-4 my-6 md:my-0">
          <a href="DashboardAdmin" className="text-xl hover:text-pink-500 duration-500 ">
            <div className="text-xl">
           
            </div>
            Dashboard
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="Menu" className="text-xl hover:text-pink-500 duration-500">
            <div className="text-xl">
          
            </div>
            Menu
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="Meja" className="text-xl hover:text-pink-500 duration-500">
            <div className="text-xl">
            
            </div>
            Meja
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="User" className="text-xl hover:text-pink-500 duration-500">
            <div className="text-xl">
            
            </div>
            User
          </a>
        </li>

        <button
          class="middle none center mb-2 block w-full rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-3 px-6 font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button" onClick={handleLogout}
          data-ripple-light="true"
        >Log Out</button>
      </ul>
    </nav>
  );
}