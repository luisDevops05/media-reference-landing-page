// import Links from './links' 
import './style.css'
import './mobile.css' 
import DevImg from './images/dev.jpeg'
import Dev from './dev' 
import Link from './links'
import {FaRegUser} from "react-icons/fa";
import {FaGithub} from 'react-icons/fa'
import {FaSpotify} from 'react-icons/fa'
import {FaDollarSign} from 'react-icons/fa'
import{FaSquarespace} from 'react-icons/fa'
import {FaCommentAlt} from 'react-icons/fa'
import {FaTools} from 'react-icons/fa'

function App(){
    
    return(
        <div>
         <header>
            <div className='info'>
                <div className='info-img'><Dev image={DevImg}></Dev></div>
                <div className='info-name'><h1>Dev</h1></div>
            </div>
        </header>

        <section id='links'>
            <div className='links-main-con'>
                <div className='links-con'>
                    <div className='link one'> <FaRegUser className='icons'></FaRegUser><Link info='My Portfolio'></Link></div>
                    <div className='link two'> <FaGithub className='icons'></FaGithub> <Link info='GitHub'></Link ></div>
                    <div className='link three'> <FaSpotify className='icons'></FaSpotify> <Link info='PodCast List'></Link ></div>
                    <div className='link four'><FaDollarSign className='icons'></FaDollarSign><Link info='Business'></Link ></div>
                </div>
            </div>
           
        </section>

        <section id='bottom links'>
            <div className='bottom-main-con'>
                <div className='bottom-links-con'>
                    <div className='blink one'><a href='https://google.com'><FaSquarespace className='bIcons'></FaSquarespace></a></div>
                    <div className='blink two'><a href='https://google.com'><FaCommentAlt className='bIcons'></FaCommentAlt></a></div>
                    <div className='blink three'><a href='https://google.com'><FaTools className='bIcons'></FaTools></a></div>

                </div>
            </div>
        </section>






        </div>
  

       
    )
} 

export default App