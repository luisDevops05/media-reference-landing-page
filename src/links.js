function Link({info}){
    
    return(
        <div className="link-content-main">
            <div className="link-con-c">
                {/* <div><img id="icon" alt="icon" src={icon}></img></div> */}
                <div><h5><a id="linkStyle" href="https://google.com">{info}</a></h5></div>
            </div>
        </div>
    )



} 


export default Link