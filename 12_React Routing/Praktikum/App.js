import React from "react"
import { Routes, Route, Link } from "react-router-dom"
import { About } from "./component/content/About/About"
import { Home } from "./component/content/Home/Home"
import { Dashboard } from "./component/content/Dashboard/Dashboard"
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';


function App() {
  return (
    <React.Fragment className="">
      <header className="h-16 w-full bg bg-teal-900 text-white flex justify-between items-center px-4 sticky top-0 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] z-50">
        <h1 className="">Header</h1>
        <ArticleRoundedIcon className="flex justify-end"/>
      </header>
      <div className="flex">
        <nav className="w-52 bg-green-100 h-screen mr-4">
          <div className="w-52 bg-green-50 z-50 px-3">
            <ul className="">
              <li>

              </li>
              <li className="hover:bg-gray-200 active:bg-gray-200 focus:outline-none focus:ring focus:bg-gray-200 rounded-lg py-4
    ">
                <Link className="pl-2" to="/">Home</Link>
              </li>
              <li className="hover:bg-gray-200 active:bg-gray-200 focus:outline-none focus:ring focus:bg-gray-200 rounded-lg py-4
    ">
                <Link className="pl-2" to="dashboard">Dashboard</Link>
              </li>
              <li className="hover:bg-gray-200 active:bg-gray-200 focus:outline-none focus:ring focus:bg-gray-200 rounded-lg py-4
    ">
                <Link className="pl-2" to="about">About</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="">
          {/* Define all the routes */}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="dashboard" element={<Dashboard/>}></Route>
            {/* <Route path="*" element={<NotFound />}></Route> */}
          </Routes>
        </div>
      </div>
    </React.Fragment>
  )
}

export default App