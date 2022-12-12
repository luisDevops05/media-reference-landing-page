// import Links from './links' 
import './style.css' 
import DevImg from './images/dev.jpeg'
import Dev from './dev'

function App(){
    return(
        <header>
            <div className='info'>
                <div className='info-img'><Dev image={DevImg}></Dev></div>
                <div className='info-name'><h1>Dev</h1></div>

            </div>
        </header>
    )
} 

export default App