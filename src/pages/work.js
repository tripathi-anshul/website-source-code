import React from "react"
import { Helmet } from "react-helmet"
import NavBar from "../components/navbar"

const Work = () => (
    <div>
        <NavBar/>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Work</title>
        </Helmet>
        <div class="columns is-centered"> 
        Work goes in here
        </div>
    </div>
        
)
export default Work