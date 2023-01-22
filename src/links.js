function Link({info,link}){
    
    return(
        <div className="link-content-main">
            <div className="link-con-c">
                <div><h5><a target={'_blank'} id="linkStyle" href={link}>{info}</a></h5></div>
            </div>
        </div>
    )



} 


export default Link