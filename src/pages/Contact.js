import React from 'react'

function Contact (){
    function instaRedirect() {
        const url = "https://www.instagram.com/fallingstarsdesign/"
        window.open(url, "_blank")
    }

    return (
        <div>
            <p className='design'></p>
            <div className= 'contact'>
            <h3>Amber R. Behrens, Owner/Chief Designer</h3>
            <h3><a className="mailto" href="mailto:fallingstarsdesign@gmail.com">fallingstarsdesign@gmail.com</a></h3>
            <h3 className='insta1'onClick={instaRedirect}>@fallingstarsdesign</h3>
            <h3>480.280.2566</h3>
            </div>
        </div>
    )
}


export default Contact