import React from 'react'
import HomePic from '../images/house.png'
import Insta from '../images/insta.png'
function Home (){

    function instaRedirect() {
        const url = "https://www.instagram.com/fallingstarsdesign/"
        window.open(url, "_blank")
    }
    return(
        <div>
            <p className='design'></p>
            <img className="home" src={HomePic}></img>
            <p className='design'></p>
            <img className="insta" src={Insta} alt="https://www.instagram.com/fallingstarsdesign/" onClick={instaRedirect}></img>
        </div>
    )
}


export default Home