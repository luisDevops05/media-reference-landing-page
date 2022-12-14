// import Links from './links' 
import './style.css'
import './mobile.css' 
import DevImg from './images/dev.jpeg'
import linkIcon from './images/linkIcon.png'
import Dev from './dev' 
import Link from './link'

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
                    <div className='link one'><Link icon={linkIcon} info='My Portfolio'></Link></div>
                    <div className='link two'><Link icon={linkIcon} info='Busoness Blog'></Link ></div>
                    <div className='link three'><Link icon={linkIcon} info='Forbes Interview'></Link ></div>
                    <div className='link four'><Link icon={linkIcon} info='Stocks'></Link ></div>

                </div>
            </div>
           
        </section>






        </div>
  

       
    )
} 

export default App