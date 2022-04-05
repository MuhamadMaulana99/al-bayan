import React from "react"
import { Routes, Route, Link } from "react-router-dom"
import Halaman1 from "./page/Halaman1"
import Halaman2 from "./page/Halaman2"
import Keluar from "./page/Keluar"
import Profil from "./page/Profil"


export const Home = () => {
    return (
      <React.Fragment className=" ">
        <div className="h-12 w-full bg-green-500 flex justify-around">
            <h1 className="pr-96 flex items-center">Albayan</h1>
            <ul className="flex justify-between items-center border-none">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="profil" >Profil</Link>
              </li>
              <li>
                <Link to="halaman1 ">Kami</Link>
              </li>
              <li>
                <Link to="halaman2" >Keluar</Link>
              </li>
            </ul>
        </div>
        <div>
            <Routes>
              <Route path="halaman1" element={<Halaman1/>}></Route>
              <Route path="halaman2" element={<Halaman2/>}></Route>
              <Route path="profil" element={<Profil/>}></Route>
              <Route path="keluar" element={<Keluar/>}></Route>
            </Routes>
        </div>
      </React.Fragment>
    )
  }