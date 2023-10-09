function Navbar(){
    return(
        
        <div className="nav">
            <div className="left-nav">
                <div className="logo">
                    <div>
                        <img src="https://gradjago.com/wp-content/uploads/2023/02/edyoda_transparent_logo.55bcc00f-768x274.png" width="170px"/>
                    </div>
                    <div>
                        <i>Stories</i>
                    </div>
                </div>
                <div className="categories">
                    <select>
                        <option>Explore Categories</option>
                        <option>Artificial Inteligence</option>
                        <option>Cloud Computing</option>
                        <option>DevOps</option>
                        <option>Programming Language</option>
                        <option>Mobile Application Development</option>
                        <option>Technology and Tools</option>
                        <option>Get a Job in Tech Industry</option>
                        <option>Others</option>
                    </select>
                </div>
            </div>
            <div className="right-nav">
                <div className="text">
                    EdYoda is a learning and knowledge sharing platform for techies
                </div>
                <div>
                    <button className="main-btn">Go To Main Website</button>
                </div>
            </div>
        </div>
        
    )
}
export default Navbar;