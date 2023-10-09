function Cards(){
    return(
        <div className="latest-posts">
            <h1>Latest posts</h1>
            <div className="filters">
                <img src="https://www.freeiconspng.com/uploads/filter-icon-32.png" width="15px"/>
                <h4>Filter by Category</h4>
            </div>
            <div className="card-btn">
                <button className="active">All</button>
                <button>Artificial Inteligence</button>
                <button>Cloud Computing</button>
                <button>DevOps</button>
                <button>Programming Language</button>
                <button>Technology and Tools</button>
                <button>Mobile Application Development</button>
                <button>Get a Job in Tech Industry</button>
                <button>Others</button>
            </div>
            <div className="card-container">
                {/* CARD - 1 */}
                <div className="card">
                    <img src="https://edyoda.s3.amazonaws.com/media/blog-images/seven_reasons_to_learn_python_sW8FK0o.jpg" />
                    <h3>Fresh Graduate or IT professional Looking for a job ? - 7 reasons to learn Python NOW!</h3>
                    <p><span>Arman Ahmed</span> | 05 Jul 2019</p>
                    <p className="pad">
                        If you are a fresh graduate - or new to IT - looking for the next job, you need to read this.
                        The last couple of years 
                    </p>
                </div>
                {/* CARD - 2 */}
                <div className="card">
                    <img src="https://edyoda.s3.amazonaws.com/media/blog-images/edyoda-learn-technology-for-free.jpg" />
                    <h3>Introducing you all to EdYoda - www.edyoda.com</h3>
                    <p><span>Arman Ahmed</span> | 05 Jul 2019</p>
                    <p className="pad">
                    Really ecstatic and immensely proud to introduce you all to our latest attempt of adding value and making an impact to the world we are a part of.Introducing you all to EdYoda - Open platform to 
                    </p>
                </div>
                {/* CARD - 3 */}
                <div className="card">
                    <img src="https://edyoda.s3.amazonaws.com/media/blog-images/automation-testing-an-overview-2_Ctzrh0e.png" />
                    <h3>What is Web Scraping?</h3>
                    <p><span>Zac Clancy  </span>| 25 Sep 2019</p>
                    <p className="pad">
                    Simply put, web scraping is one of the tools developers use to gather and analyze information from the Internet.
                    Some websites and platforms offer application programming interfaces (APIs) which we can use to access information in a structured way, but others might not. While APIs are certainly becoming the standard way of interacting with today’s popular platforms, we don’t always have this luxury when interacting with most of the websites on the internet.
                    </p>
                </div>
                {/* CARD - 4 */}
                <div className="card">
                    <img src="https://edyoda.s3.amazonaws.com/media/blog-images/practical_machine_learning_1_uTlUxq8.png" />
                    <h3>Practical Machine Learning with Python and Keras</h3>
                    <p><span>Daniel Pyrathon  </span>| 16 Oct 2019</p>
                    <p className="pad">
                    Machine learning is a field of artificial intelligence that uses statistical techniques to give computer systems the ability to “learn” (e.g., progressively improve performance on a specific task) from data, without being explicitly programmed. Think of how efficiently (or not) Gmail detects spam emails, or how good text-to-speech has become with the rise of Siri, Alexa, and Google Home.
                    </p>
                </div>
                {/* CARD - 5 */}
                <div className="card">
                    <img src="https://edyoda.s3.amazonaws.com/media/blog-images/5_9jUbbUb.png" />
                    <h3>Breaking the Myths around Cybersecurity</h3>
                    <p><span>EdYoda  </span>| 26 Aug 2019</p>
                    <p className="pad">
                    As the dependency on online platforms is increasing daily, cybersecurity is becoming an important concern for all companies today. The number of cyberattacks is ever-rising even after adopting every security measure possible by businesses. Cyber attackers are developing advancing technologies that are continuing to cause more damage.
                    </p>
                </div>
                {/* CARD - 6 */}
                <div className="card">
                    <img src="https://edyoda.s3.amazonaws.com/media/blog-images/4_eSRlqfD.png" />
                    <h3>Impact of Cloud Computing in various industries</h3>
                    <p><span>EdYoda  </span>| 24 Aug 2019</p>
                    <p className="pad">
                    Cloud computing has been rapidly gaining pace in the world of information technology. It has been observed that over 90% of global enterprises are using cloud technology as part of their business. Every industry has its own technology dynamics designed to suit its infrastructure. 
                    </p>
                </div>
                {/* CARD - 7 */}
                <div className="card">
                    <img src="https://edyoda.s3.amazonaws.com/media/blog-images/understanding-devops_LI08hxv.jpg" />
                    <h3>Understanding DevOps</h3>
                    <p><span>EdYoda  </span>| 23 Jul 2019</p>
                    <p className="pad">
                    DevOps is a term derived after combining development and operation for a common purpose- driving the development of operational processes. It automates the processes between the software development and IT teams to build, test, and release software faster and enhances reliability. 
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Cards;