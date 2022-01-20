import React from "react"
import { Home } from "../pages/Home"
import { NewRoom } from "../pages/NewRoom"

import { Route,Routes } from "react-router"

export  function MainRoutes(){
    return(
        <Routes>
            <Route path="/home" element={<Home/>}/>
    <Route
      path="/new"
      element={<NewRoom/>}
    />

</Routes>
    )
}
