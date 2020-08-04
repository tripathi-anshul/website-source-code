import React from 'react'
import * as Icons from "react-icons/ai"
import '../styles/styles.sass'
const Contacts = () => {
  return (
    <div>
        <a href="https://github.com/tripathi-anshul/"><Icons.AiOutlineGithub size={'1.5rem'} style={{'vertical-align':'middle', 'margin-right':'1rem', color : "black"}}/></a>
        <a href="mailto:anshult@seas.upenn.edu"><Icons.AiOutlineMail size={'1.5rem'} style={{'vertical-align':'middle', 'margin-right':'1rem', color : "black" }}/></a>
        <a href="https://www.linkedin.com/in/anshultripathi2699/"><Icons.AiOutlineLinkedin size={'1.5rem'} style={{'vertical-align':'middle', 'margin-right':'1rem', color : "black"}}/></a>
        <a href="https://www.youtube.com/channel/UCb8lHgzlPTExK_pgjzeLwjw"><Icons.AiOutlineYoutube size={'1.5rem'} style={{'vertical-align':'middle', 'margin-right':'1rem', color : "black"}}/></a>
        
    </div>
  )
}

export default Contacts
