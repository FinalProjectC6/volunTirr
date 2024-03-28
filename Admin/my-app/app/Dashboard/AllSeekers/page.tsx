"use client";

import SideBar from "@/app/Dashboard/Sidebar"
import NavBar from "@/app/Dashboard/Navbar"
import SeekersCards from"@/app/Dashboard/AllSeekers/DashSeekers"
import * as React from 'react';


export default function Products (){


    
    return(
      
<main>
    <NavBar/><SeekersCards/>
       <SideBar/>

</main>
    )


}