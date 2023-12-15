import React from "react";
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import image from './image.png';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Layout from "../components/Layout/Layout";

function Contact() {
  return (
    <>
    <Layout title={"Contact Us - BidHub"}>
      <h2 className='titlee pt-3 my-4 text-center'>
          Know The Creators...
      </h2>
      <div className='flexx mx-5'>
        <div className="card mx-4" styles="width: 18rem;">
          <img src={image} className="card-img-top" alt="person" height="200px" />
          <div className="card-body">
            <h5 className="card-title">Nithin Pranav</h5>
            <a href="https://github.com/Nithinpranav" className="github mx-3" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
            <a href="mailto: nithinpranav12@gmail.com" className="mail mx-3" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} size="2x" /></a>
            <a href="https://www.linkedin.com/in/nithin-pranav-cse12042004/" className="linkedin mx-3" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
          </div>
        </div>
        <div className="card mx-4" styles="width: 18rem;">
          <img src={image} className="card-img-top" alt="person" height="200px" />
          <div className="card-body">
            <h5 className="card-title">Subaraksha</h5>
            <a href="https://github.com/subaraksha" className="github mx-3" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
            <a href="mailto: subaraksha@gmail.com" className="mail mx-3" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} size="2x" /></a>
            <a href="https://www.linkedin.com/in/subaraksha-r-t-41a5ba1ab/" className="linkedin mx-3" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
          </div>
        </div>
        <div className="card mx-4" styles="width: 18rem;">
          <img src={image} className="card-img-top" alt="person" height="200px" />
          <div className="card-body">
            <h5 className="card-title">Vishal Ganapathy</h5>
            <a href="https://github.com/vish1806" className="github mx-3" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
            <a href="mailto: vishalganpathy@gmail.com" className="mail mx-3" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} size="2x" /></a>
            <a href="https://www.linkedin.com/in/vishal-ganapathy" className="linkedin mx-3" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
          </div>
        </div>
        <div className="card mx-4" styles="width: 18rem;">
          <img src={image} className="card-img-top" alt="person" height="200px" />
          <div className="card-body">
            <h5 className="card-title">Geedhavarshini Balaji</h5>
            <a href="https://github.com/geedhavarshinii" className="github mx-3" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
            <a href="https://www.linkedin.com/your-linkedin-profile" className="mail mx-3" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} size="2x" /></a>
            <a href="https://www.linkedin.com/in/geedhavarshini-balaji-819a79271/" className="linkedin mx-3" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
          </div>
        </div>
        <div className="card mx-4" styles="width: 18rem;">
          <img src={image} className="card-img-top" alt="person" height="200px" />
          <div className="card-body">
            <h5 className="card-title">Athish Pranav</h5>
            <a href="https://github.com/athish-r" className="github mx-3" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
            <a href="mailto: athishpranav12@gmail.com" className="mail mx-3" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} size="2x" /></a>
            <a href="https://www.linkedin.com/in/athish-pranav-r/" className="linkedin mx-3" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
          </div>
        </div>
      </div>
      <h5 className="text-center mt-5">To get admin access, please mail to the above creators!</h5>
    </Layout>
    </>

    
  )
}
export default Contact;