import React from 'react'
import farmhouse from '../images/farmhouse.jpg'
function About (){
    return (
        <div>
            <p className='design'></p>
            <h3 className='about'>We are a residential custom home design service serving the greater Phoenix Arizona area. Specializing in both classic and modern farmhouse and cottage style homes, we do everything from design your dream home, to creating the perfect interior space. No job is too small!</h3>
            <img className="farmhouse" src={farmhouse}></img>
        </div>
    )
}


export default About