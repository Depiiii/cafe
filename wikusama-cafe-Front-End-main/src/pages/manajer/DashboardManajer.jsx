import { useState, useEffect } from "react"; // usestate untuk menyimpan nilai, useeffect: menjelaskan function sebelum render/return
import React from 'react';
import axios from "axios";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { baseURL, config } from "../../config";
import { Typography } from "@material-tailwind/react";

function DashboardManajer() {
  const [mejas, setMejas] = useState("");
  const [menus, setMenus] = useState("");
  const [user, setUser] = useState("");
  const [menuLaris, setMenuLaris] = useState([]);
  const [menuJarang, setMenuJarang] = useState([]);


  ChartJS.register(ArcElement, Tooltip, Legend);

  useEffect(() => {
    //sesuai dengan functionnya
    getMejas();
    getMenus();
    // getUsers();
    getUser();
    getMenuLaris();
    getMenuJarang();

  }, []);

  const getMejas = () => {
    axios
      .get(baseURL + "/meja/getAllMeja", config)
      .then((response) => {
        setMejas(response.data.data.length);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getMenus = () => {
    axios
      .get(baseURL + "/menu/GetAllMenu", config)
      .then((response) => {
        setMenus(response.data.data.length);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getUser = () => {
    axios
      .get(baseURL + "/user/getAllUser", config)
      .then((response) => {
        setUser(response.data.data.length);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getMenuLaris = () => {
    axios
      .get(baseURL + "/menu/MenuLaris", config)
      .then((response) => {
        setMenuLaris(response.data.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getMenuJarang = () => {
    axios
      .get(baseURL + "/menu/MenuJarang", config)
      .then((response) => {
        setMenuJarang(response.data.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="">
        <div className="container px-6 py-8 mx-auto">

          <Typography variant="h1" color="blue" textGradient>
            <div className="container mx-auto"> {/* tambahkan kelas container */}
              <h1 className="text-pink-500 my-4 text-center">Selamat datang Manager</h1>
            </div>
          </Typography>

          <div className="grid grid-cols-1 gap-8 mt-6 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3">

            {/* menu */}
            <div className="w-full p-8 space-y-8 text-center bg-[#FD841F] rounded-lg">
              <p className="font-medium text-gray-200 uppercase">Menu</p>

              <h2 className="text-5xl font-bold text-white uppercase ">
                {menus}
              </h2>
              <p className="font-medium text-gray-200">Jumlah Menu</p>
            </div>

            {/* meja */}
            <div className="w-full p-8 space-y-8 text-center border bg-[#E14D2A] rounded-lg ">
              <p className="font-medium  uppercase text-gray-200">
                Meja
              </p>
              <h2 className="text-5xl font-bold  uppercase text-white">
                {mejas}
              </h2>
              <p className="font-medium  text-gray-200">Jumlah Meja</p>
            </div>

            {/* user */}
            <div className="w-full p-8 space-y-8 text-center bg-[#CD104D] rounded-lg ">
              <p className="font-medium  uppercase text-gray-200">
                User
              </p>

              <h2 className="text-5xl font-bold uppercase text-white">
                {user}
              </h2>

              <p className="font-medium  text-gray-200">
                Jumlah user (admin,Manajer,Kasir)
              </p>
            </div>
          </div>

          <Typography variant="h1" color="blue" textGradient>
            <div className="container mx-auto"> {/* tambahkan kelas container */}
              <h1 className="text-pink-500 my-4 text-center">STATISTIK MENU</h1>
            </div>
          </Typography>
          <div className="w-full" style={{ display: `flex`, flexWrap: `wrap`, justifyContent: `center` }}>
            <div style={{ height: `400px` }} className="m-10">
              <h2 className="">
                <h1 className=" text-center font-large text-black-500">MENU TERLARIS</h1>
              </h2>
              <Doughnut
                options={{
                  maintainAspectRatio: false,
                  plugins: {
                    legend: { display: true },
                  }
                }}
                data={
                  {
                    labels: menuLaris.map(item => item.nama_menu),
                    datasets: [{
                      data: menuLaris.map(item => item.jumlah),
                      backgroundColor: ['red', 'blue', 'green', 'yellow', 'brown']
                    }]
                  }
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardManajer;