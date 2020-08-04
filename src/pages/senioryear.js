import React from "react"
import { Helmet } from "react-helmet"
import NavBar from "../components/navbar"

const Senioryear = () => (
    <div>
        <NavBar/>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Work</title>
        </Helmet>
        <div class="columns is-centered"> 
        <div class="column is-one-third"></div>
        <div class="column">
            <p>It's most likely that I won't have much of a senior year  because of covid,
        and that the Penn that became home and I'm used to will be far from recognizable.</p>
        
        <br></br>

        <p>I've always regretted not having enough memorabilia from previous chapters of life.
        Since I'm fortunate enough to be in Philly, I'll be actively documenting pictures 
        some of the places/people with whom with whom I share fond memories.
        </p>

        <br></br>

        <p>Hopefully engineering reopens and Levine 3rd grabs a spot below</p>

        <br></br>

        </div>
        <div class="column"></div>    
        </div>
    </div>
        
)
export default Senioryear