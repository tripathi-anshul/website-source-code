import React from "react"
import { Helmet } from "react-helmet"
import NavBar from "../components/navbar"
import Contacts from "../components/contacts"

const Home = () => (
  <div>
      <NavBar/>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Anshul Tripathi</title>
      </Helmet>
      <div class="columns">
        <div class="column is-one-third"></div>

        <div class="column">
          <center>
            <img class={"img-rounded"} alt = "" src={"/media/ATripathi-1.jpg"} style={{'border-radius' : '50%','width' : '14rem'}}/>
            
            <h1 class = "title" style={{'paddingBottom' : '20px'}}>Hi, I'm Anshul <span role = "img">👋</span></h1>
          </center>
          <p style={{'paddingBottom' : '20px'}}>
            Hi, I'm Anshul. I'm a senior undergrad + grad student at the University of Pennsylvania, where I'm
            working towards a BSE in CS and Philosophy, a minor in Mathematics and an MSE in Data Science. 
          </p>

          <p style={{'paddingBottom' : '20px'}}>At Penn, 
            I enjoy teaching CS &amp; Math, working on Software and Machine Learning Projects, and studying Moral &amp;
            Socio-political Philosophy.  I am involved with research projects including using machine learning to develop
            insightful tools for Penn Admissions to predict graduate student performance using
            admission applications, as well as an investigation into the permformance semi-supervised 
            ML algorithms as a function of dimensionality and labeled/unlabeled sample complexities.</p>

          <p style={{'paddingBottom' : '20px'}}>
            Outside school, I enjoy longboarding, cooking and listening to podcasts.
            I've also spent my quarantine binge-watching Naruto. 
          </p>

          <p align = "center"><Contacts/></p>
        <br/>
        <br/>
        </div>

        <div class="column"></div>
        
      </div>
  </div>
)
export default Home
