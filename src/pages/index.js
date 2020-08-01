import React from "react"
import { Helmet } from "react-helmet"
import NavBar from "../components/navbar"

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
            <img class={"img-rounded"} src={"/media/ATripathi-1.jpg"} style={{'border-radius' : '50%','width' : '14rem'}}/>
            <h1 class = "title" style={{'paddingBottom' : '20px'}}>Hi, I'm Anshul 👋</h1>
          </center>
          <p style={{'paddingBottom' : '20px'}}>
            Hi, I'm Anshul. I'm a senior undergrad + grad student at the University of Pennsylvania, where I'm
            working towards a BSE in CS and Philosophy, a minor in Mathematics and an MSE in Data Science. At Penn, 
            I enjoy teaching CS &amp; Math, working on Software and Machine Learning Projects, and studying Moral &amp;
            Socio-political Philosophy. 
          </p>

          <p style={{'paddingBottom' : '20px'}}>
            I'm also involved in independent research projects. 
            Under the advisory of <a href = "https://www.seas.upenn.edu/directory/profile.php?ID=58">Boon Thau Loo</a> and
             <a href = "https://web.sas.upenn.edu/ira/"> Ira Winston</a>, I'm using machine learning to develop
            insightful tools for Penn Admissions to predict graduate student performance based on their
            admission application.
            Under <a href="https://www.seas.upenn.edu/directory/profile.php?ID=99"> Santosh Venkatesh </a>, 
            I'm conducting an investigation into the permformance semi-supervised 
            ML algorithms as a function of dimensionality and labeled/unlabeled sample complexities.
          </p>

          <p style={{'paddingBottom' : '20px'}}>
            Outside school, I enjoy riding my Boosted Board ⚡🛹, cooking gnocchi 🥔, chance encounters with 
            dogs 🐕 on walks along the Schuykill river and listening to podcasts 🎙️. I've also spent my quarantine
            binge-watching Avatar:The Last Airbender &amp; Naruto. 
          </p>

        </div>

        <div class="column"></div>
        
      </div>
  </div>
)
export default Home
