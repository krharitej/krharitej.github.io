import React from 'react'
import './Profile.css'
import ProfilePic from "/Profile_Blur1.png"

const Profile = () => {
  return (
    <>
        
        <div className='obox1'>
            <div>
                <h1>Welcome</h1>
            </div>
            <div className='pbox'>
                <img src={ProfilePic} alt="profile pic"/>  
            </div>
            <div>
                <h2>K R HARITEJ</h2>
            </div>
        </div>
        <div className='obox'>
            <div className='anchors'>
                <a href='#'>Home</a>
            </div>

            <div className='anchors'>
                <a href='#'>About</a>
            </div>

            <div className='anchors'>
                <a href='#'>Skills</a>
            </div>

            <div className='anchors'>
                <a href='#'>Projects</a>
            </div>

            <div className='anchors'>
                <a href='#'>Links</a>
            </div>

            <div className='anchors'>
                <a href='#'>Blog</a>
            </div>

            <div className='anchors'>
                <a href='#'>Contact Me</a>
            </div>
        </div>
    </>
    
  )
}

export default Profile