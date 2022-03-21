import React from "react"

export const Home = () => {
    return (
      <React.Fragment className=" ">
        <div className="h-10 w-full bg-green-500 flex justify-around">
            <h1 className="pr-96">Albayan</h1>
            <ul className="flex justify-between pl-72">
              <li>Home</li>
              <li>History Perusahaan</li>
              <li>Tentang Kami</li>
              <li>Profil Perusahaan</li>
            </ul>
        </div>

      </React.Fragment>
    )
  }