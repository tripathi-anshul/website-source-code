import React from "react"
import { Helmet } from "react-helmet"
import NavBar from "../components/navbar"

const Projects = () => (
    <div>
        <NavBar/>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Projects</title>
        </Helmet>
        <div class="columns is-centered"> 
            Projects go in here
        </div>
    </div>
        
)
export default Projects