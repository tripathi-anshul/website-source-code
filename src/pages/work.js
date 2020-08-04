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
        <div class="column is-one-fifth"></div>
        <div class="column is-three-fifths">

        <div class="card">
            <div class="card-content">
                <div class="media">
                <div class="media-left">
                    <figure class="image is-96x96">
                    <img src="https://cdn.theorg.com/0ce3ba7b-ec9e-4501-babc-8070dc63b390_medium.jpg" alt="Placeholder image"/>
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-4">Barclays</p>
                    <p class="subtitle is-6">Software Engineering Intern</p>
                </div>
                </div>

                <div class="content">
                    Worked in the Wholesale Lending divison on LoanIQ, Barclays' wholesale lending platform on various projects, including Kerberos-based Single-Sign On, AutoSys Job Scheduling, 
                    as well as automated Selenium-based application testing for the LoanIQ API as well as the LoanIQ Application.
                    <br/>
                    <br/>
                <small>June 2020 - August 2020</small>
                </div>
            </div>
        </div>

        <br/>

        <div class="card">
            <div class="card-content">
                <div class="media">
                <div class="media-left">
                    <figure class="image is-96x96">
                    <img src="/media/UPenn.png" alt="Placeholder image"/>
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-4">University of Pennsylvania</p>
                    <p class="subtitle is-6">Teaching Assistant</p>
                </div>
                </div>

                <div class="content">
                    Oversaw a total of over 850 students, held weekly office hours, led recitations, programmed auto-grading software, drafted + graded quizzes, homework assignments, exams, & was a project manager for the following classes:
                <ul>
                    <li>CIT 593 : Introduction to Computer Systems (Fall '19)</li>
                    <li>CIS 550 : Databases and Information Systems (Fall '19, Spring '20, Summer '20, Fall '20)</li>
                    <li>ESE 530 : Elements of Probability Theory and Random Processes (Fall '20)</li>
                    <li>ENM 503 : Introduction to Probability and Statistics (Summer '20)</li>
                    <li>ESE 301 : Engineering Probability (Spring '19, Spring '20)</li>
                    <li>ESE 190 : Introduction to Open Source Hardware/Software (Spring '18)</li>
                </ul>
                <small>December 2017 - Present</small>
                </div>
            </div>
        </div>
        <br/>

        <div class="card">
            <div class="card-content">
                <div class="media">
                <div class="media-left">
                    <figure class="image is-96x96">
                    <img src="/media/UPenn.png" alt="Placeholder image"/>
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-4">University of Pennsylvania</p>
                    <p class="subtitle is-6">Course Developer</p>
                </div>
                </div>

                <div class="content">
                Worked as a part time Penn employee to aid the development &amp; curation of course content for the online version of Penn’s Online + On-Campus MCIT
                Master’s program for the following classes:
                <ul>
                    <li>CIT 593: Introduction to Computer Systems (Fall 2019)</li>
                    <li>CIS 550: Databases &amp; Information Systems (Fall 2019, Spring 2020, Fall 2020)</li>
                </ul>
                <br/>

                Worked as a full-time Penn employee in Summer 2020 to develop autograder technology for CIS 550: Databases &amp; Information Systems
                <br/>
                <br/>
                <small>Part Time: August 2019 - May 2020</small>
                <br/>
                <small>Full Time: May 2020 - July 2020</small>
                <br/>
                <small>Part Time: August 2020 Onwards</small>
                </div>
            </div>
        </div>
        <br/>

        <div class="card">
            <div class="card-content">
                <div class="media">
                <div class="media-left">
                    <figure class="image is-96x96">
                    <img src="/media/Caymus.webp" alt="Placeholder image"/>
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-4">Caymus Technology Ventures</p>
                    <p class="subtitle is-6">Product Management Intern</p>
                </div>
                </div>

                <div class="content">
                    Debugging of online MOOC-aggregation platform <a href = "https://lore.online ">lore.online</a>, and project planning + spec writing for the <a href = "https://lore.online/learning-path/list">Learning Pathways</a> feature.
                    <br/>
                    <br/>
                <small>December 2018 - January 2019</small>
                </div>
            </div>
        </div>

        <br/>


        </div>
        <div class="column is-one-fifth"></div>
        </div>
    </div>
        
)
export default Work