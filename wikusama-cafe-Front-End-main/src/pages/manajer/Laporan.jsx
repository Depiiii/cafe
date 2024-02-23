import React, { useState, useEffect, } from 'react';
import axios from 'axios';
import { baseURL, config } from '../../config';
import { Datepicker, Input, initTE } from "tw-elements";
import { Typography } from "@material-tailwind/react";
initTE({ Datepicker, Input }, { allowReinits: true });



const Laporan = () => {
  const [transaksi, setTransaksi] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [totalPendapatan, setTotalPendapatan] = useState(0);

  useEffect(() => {
    fetchTransaksi();
  }, []);

  const fetchTransaksi = async () => {
    try {
      const response = await axios.get(baseURL + "/transaksi/getTransaksi", config);
      setTransaksi(response.data.data);
      let tempTransaksi = [...response.data.data]
      let total = 0
      for (let index = 0; index < tempTransaksi.length; index++) {
        total += tempTransaksi[index].detail_transaksi.reduce(
          (total, detailItem) =>
            total + detailItem.menu.harga * detailItem.qty,
          0
        )
      }
      setTotalPendapatan(total)
    } catch (error) {
      console.error(error);
    }
  };

  const handleFilter = async () => {
    try {
      const response = await axios.post(baseURL + "/transaksi/find", {
        startDate,
        endDate,
      }, config);
      
      setTransaksi(response.data.data);
      let tempTransaksi = [...response.data.data]
    
      let total = 0
      
      for (let index = 0; index < tempTransaksi.length; index++) {
        
        total += tempTransaksi[index].detail_transaksi.reduce(
          (total, detailItem) =>
            total + detailItem.menu.harga * detailItem.qty,
          0
        )
      }
      
      setTotalPendapatan(total)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-full mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">
        Daftar Transaksi
      </h1>

      <div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Tanggal Awal:
          </label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Tanggal Akhir:
          </label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
          />
        </div>

        <button
          className="bg-pink-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleFilter}
        >
          Filter
        </button>
      
      </div>
      <br />
      <Typography variant="h1" color="blue" textGradient>
            <div className="container mx-auto"> {/* tambahkan kelas container */}
              <h1 className="text-pink-500 my-4 text-center">TOTAL PENDAPATAN Rp{" "}{totalPendapatan}</h1>
            </div>
          </Typography>
     
      <br /><br />
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                No
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Tanggal Transaksi
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Nama Pelanggan
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                No Meja
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                User
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Menu
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Total
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {transaksi.map((transaksiItem, index) => (
              <tr key={transaksiItem.id}>
                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {new Intl.DateTimeFormat("id-ID").format(
                    new Date(transaksiItem.tgl_transaksi)
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {transaksiItem.nama_pelanggan}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {transaksiItem.meja.nomor_meja}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {transaksiItem.user.nama_user}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <ul>
                    {transaksiItem.detail_transaksi.map((detailItem) => (
                      <li key={detailItem.id}>
                        {detailItem.menu.nama_menu} ({detailItem.qty})
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  Rp{" "}
                  {new Intl.NumberFormat("id-ID").format(
                    transaksiItem.detail_transaksi.reduce(
                      (total, detailItem) =>
                        total + detailItem.menu.harga * detailItem.qty,
                      0
                    )
                  )}
                 
                </td>
              </tr>
              
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Laporan;