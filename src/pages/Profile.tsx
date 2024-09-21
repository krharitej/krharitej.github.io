import './Profile.css'
import ProfilePic from "/Profile_Blur1.png"
import Navbar from '../components/Navbar'

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
        <Navbar></Navbar>
        <div className='biobox'>
            <p>
                <h5>I am a fullstack web developer and Android developer with a deep passion for computer science.<br></br>My skill set spans both frontend and backend technologies, with expertise in frameworks like React and Django, as well as experience in developing mobile applications.<br></br>
                     In addition, I have a growing interest in cloud architecture and security, areas where I aim to expand my knowledge and contribute to creating secure, scalable systems.</h5>
                <h5>My enthusiasm for learning drives me to keep exploring new technologies and refining my skills across a wide array of disciplines.</h5>
            </p>
                
        </div>
    </>
    
  )
}

export default Profile