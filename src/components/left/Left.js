import './Left.css'

const Left = () => {
    return (<header>
        <div className="profile-pic"></div>
        <nav>
                <a href="#about"  className='nav-link'>About Me</a>
                <a href="#projects" className='nav-link'>Projects</a>
                <a href="#experiences" className='nav-link'>Experiences</a>
                <a href="#edu" className='nav-link'>Certificates</a>
                <a href="#certs" className='nav-link'>Education</a>
                <a href="#contacts" className='nav-link'>Contact me</a>
            
        </nav>
    </header>)
}

export default Left;