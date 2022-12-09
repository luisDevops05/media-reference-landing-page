// import Links from './links' 
import './style.css' 
import Dev from './images/dev.jpeg'

function App(){
    return(
        <header>
            <div className='info'>
                <div className='info-img'><img image={Dev}></img></div>
                <div className='info-name'><h1>Dev</h1></div>

            </div>
        </header>
    )
} 

export default App