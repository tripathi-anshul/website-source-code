import React from "react"
import { Helmet } from "react-helmet"
import NavBar from "../components/navbar"
import { AiOutlineMail, AiOutlineGithub, AiOutlineInfoCircle, AiOutlineLink, AiOutlineYoutube} from "react-icons/ai";
import { FaDog } from "react-icons/fa";

const Projects = () => (
    <div>
        <NavBar/>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Projects</title>
        </Helmet>
        
        <div class="columns is-centered" style={{'paddingLeft' : '200px', 'paddingRight' : '200px'}}> 
             <div class = "column is-one-third">
                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">
                        CIS 550 Automated Grading Suite
                        </p>
                    </header>
                    <div class="card-content">
                        <div class="content">
                        Local + Docker-executable automated grading Suite written using Java, Python,
                        Cypress + React, Selenium + Angular,  Neo4j &amp; MongoDB
                        <br/>
                        <br/>
                        <div class="notification is-danger is-light">
                            <small>
                                <strong>Note:</strong> Confidential repository only accessible by CIS 550 course staff and affiliates. 
                            </small>
                        </div>
                        </div>
                    </div>
                    <footer class="card-footer">
                        <a href="mailto: anshult@seas.upenn.edu" class="card-footer-item"><AiOutlineMail /></a>
                    </footer>
                </div>
                <br/>

                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">
                        This Website
                        </p>
                    </header>
                    <div class="card-content">
                        <div class="content">
                        Built using GatsbyJS; an open-source framework based on React and powered by GraphQL.
                        </div>
                    </div>
                    <footer class="card-footer">
                        <a href="/" class="card-footer-item"><AiOutlineLink /></a>
                        <a href="https://github.com/tripathi-anshul/website-source-code" class="card-footer-item"><AiOutlineGithub /></a>
                    </footer>
                </div>
                <br/>

                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">
                        HandiTalk
                        </p>
                    </header>
                    <div class="card-content">
                        <div class="content">
                        Electronic glove programmed in C using the Arduino platform that allows for the translation of American Sign Language to English text.
                        </div>
                    </div>
                    <footer class="card-footer">
                        <a href="https://www.youtube.com/watch?v=ufhuEseh4_s" class="card-footer-item"><AiOutlineYoutube /></a>
                    </footer>
                </div>
                <br/>

                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">
                        Miniature Wireless Tesla Coil
                        </p>
                    </header>
                    <div class="card-content">
                        <div class="content">
                            Not a software project, but probably the most thing I ever built with my hands from back when I almost became an electrical engineer.
                        </div>
                    </div>
                    <footer class="card-footer">
                        <a href="https://www.youtube.com/watch?v=wO1G7jpab-o" class="card-footer-item"><AiOutlineYoutube /></a>
                    </footer>
                </div>
                <br/>

             </div>
                 
                









                 
             <div class = "column is-one-third">

                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">
                        HabitSmart
                        </p>
                    </header>
                    <div class="card-content">
                        <div class="content">
                        Health &amp; habit tracking social app written in Java for the Android platform.
                        </div>
                    </div>
                    <footer class="card-footer">
                        <a href="https://github.com/tripathi-anshul/HabitSmart" class="card-footer-item"><AiOutlineGithub /></a>
                    </footer>
                </div>
                <br/>

                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">
                            Gesture-controlled Rough Terrain Rover
                        </p>
                    </header>
                    <div class="card-content">
                        <div class="content">
                            A custom-built wireless rover programmed in C on the Arduino platform. It is designed for control using 
                            hand gestures through a wearable glove and can detect injured people in disaster areas. 
                        </div>
                    </div>
                    <footer class="card-footer">
                        <a href="https://www.youtube.com/watch?v=FHO8JIrfvU8" class="card-footer-item"><AiOutlineYoutube /></a>
                    </footer>
                </div>
                <br/>

                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">
                        Amazon Review Analysis
                        </p>
                    </header>
                    <div class="card-content">
                        <div class="content">
                        Analysis of amazon product ratings and product reviews using a variety of Gensim Language Processing models in python.
                        </div>
                    </div>
                    <footer class="card-footer">
                        <a href="https://github.com/tripathi-anshul/AmazonReviewAnalysis" class="card-footer-item"><AiOutlineGithub /></a>
                    </footer>
                </div>
                <br/>

                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">
                        ApneaTech
                        </p>
                    </header>
                    <div class="card-content">
                        <div class="content">
                        Wearable device programmed in C using the Arduino platform that allows for detection of breathing patterns during sleep in order to diagnose the presence &amp; severity 
                        of sleep apnea.
                        </div>
                    </div>
                    <footer class="card-footer">
                        <a href="https://www.youtube.com/watch?v=VJNPnPe6a30" class="card-footer-item"><AiOutlineYoutube /></a>
                    </footer>
                </div>
                <br/>



                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">
                        Wireless Sensor For Fire Detection &amp; Extinguishing
                        </p>
                    </header>
                    <div class="card-content">
                        <div class="content">
                        Created a Wireless Sensor Network for fire detection &amp; extinguishing in Deonar Dumping Ground; Asia's largest garbage dump, in order to reduce pollution and toxicity 
                        levels of surrounding residential areas.
                        </div>
                    </div>
                    <footer class="card-footer">
                        <a href="https://www.youtube.com/watch?v=Aw638-LxiZI" class="card-footer-item"><AiOutlineYoutube /></a>
                    </footer>
                </div>
                <br/>

             </div>














             <div class = "column is-one-third">

                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">
                        JCompiler
                        </p>
                    </header>
                    <div class="card-content">
                        <div class="content">
                        Compiler for J (a stack-based language) written in C that translates J code into corresponding executable LC4 assembly instructions
                        </div>
                    </div>
                    <footer class="card-footer">
                        <a href="https://github.com/tripathi-anshul/JCompiler" class="card-footer-item"><AiOutlineGithub /></a>
                    </footer>
                </div>
                <br/>

                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">
                        Ethereum PetShop
                        </p>
                    </header>
                    <div class="card-content">
                        <div class="content">
                            Decentralized application built upon the Ethereum blockchain platform that simulates an adoption tracking system for a pet shop.
                        </div>
                    </div>
                    <footer class="card-footer">
                        <a href="https://github.com/tripathi-anshul/EthereumBlockchainPetShop" class="card-footer-item"><FaDog /></a>
                    </footer>
                </div>
                <br/>

                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">
                        Interactive Electronic Art Exhibit
                        </p>
                    </header>
                    <div class="card-content">
                        <div class="content">
                        Band-pass filter based device programmed in C allowing musicians and artists to naturally interface 
                        with electroluminescent panels through transducers and audio devices. Funded by UPenn SEAS and ICA. 

                        </div>
                    </div>
                    <footer class="card-footer">
                        <a href="https://en.wikipedia.org/wiki/Institute_of_Contemporary_Art,_Philadelphia" class="card-footer-item"><AiOutlineInfoCircle /></a>
                    </footer>
                </div>
                <br/>

                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">
                        Electrosleep
                        </p>
                    </header>
                    <div class="card-content">
                        <div class="content">
                            Another hardware project from my EE days that uses rectifiers and boost converters to convert mechanical + thermal energy generated by a moving head
                            into electrical energy that can be used to charge devices.
                        </div>
                    </div>
                    <footer class="card-footer">
                        <a href="https://www.youtube.com/watch?v=3Saij4efg2I" class="card-footer-item"><AiOutlineYoutube /></a>
                    </footer>
                </div>
                <br/>

             </div>
        </div>

        
        
    </div>
        
)
export default Projects