import React from 'react'
import {Link} from "react-router-dom"

export default function NavigationBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success text-white ">
    <div className="container-fluid">
    
   
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-4">
      <li className="nav-item">
          <Link className="navbar-brand fs-0 fst-italic " aria-current="page" to="/">
            Enjoyfood
          </Link>
        </li>
        <li className="nav-item">
          <Link className="navbar-brand fs-0" aria-current="page" to="/HomePage">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link" to="/">
            Link
          </Link>
        </li>
      </ul>

      {/* <form className=" d-flex col-4 ">
        <input
          className="form-control me-1 bg-white"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-light gap-4" type="submit">
          Search
        </button>
      </form> */}



<div className="input-group">
  <input
    type="search"
    className=" rounded  fs-black "
    placeholder="Search"
    aria-label="Search"
    aria-describedby="search-addon"
    style={{color:'black',border: 'none', width: "330px", height: "40px", marginLeft:"100px", backgroundColor:"whitesmoke",}}
    // form-control
  />
  <button
    type="button"
    className="btn btn-light"
    data-mdb-ripple-init=""
  >
    search
  </button>
</div>


         <Link className="btn btn-outline-primary gap-4" to="/LoginPage">Login</Link>
      
    </div>
  </div>
</nav>
  )
}
