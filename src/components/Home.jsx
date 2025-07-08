import Profile from '../assets/images/Jagannath.jpg'
function Home(props) {
    return ( 
        <div className="hero w-100">
            <div className="container" >
                <div className="container row" id='profileContainer'>
                    <div className="col-10 d-flex flex-column align-items-start gap-2 hero-desc">
                        <h1>Hi, I'm <span className="text-warning">Jagannath Padhi</span></h1>
                        <p className='text-light'>Full Stack Developer passionate about creating innovative web solutions</p>
                        <div className="d-flex touch">
                            <button type="button" className="btn btn-warning btn" onClick={() => props.setNavigateContact(props.navigateContact.refFour)}>Vew My Work</button>
                            <button type="button" className="btn btn-outline-light ms-sm-5" id='mom' onClick={() => props.setNavigateContact(props.navigateContact.refFive)}>Get In Touch</button>
                        </div>
                    </div>
                    <div className="col-sm-2" id='profileImage'>
                        <img src={Profile} alt="Profile Image" className='w-100 h-100 rounded-circle' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;