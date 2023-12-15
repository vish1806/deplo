import React from "react";
import Layout from "./../components/Layout/Layout";
import './About.css';
const About = () => {
  return (
    <Layout title={"About Us - BidHub"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="images/AboutUs.jpg"
            alt="contactus"
            style={{ width: "75%" }}
          />
        </div>
        <div className="col-md-4">
          <p>
            <h3 className="my-2 pt-2">Our Mission</h3>
            <p>At BidHub, our mission is to provide a seamless and enjoyable auction experience for both buyers and sellers. We are committed to creating a thriving marketplace where individuals and businesses can connect, trade, and discover unique treasures. Our platform is designed to be user-friendly, secure, and transparent, ensuring that you have the best possible auction experience.</p>
            
            <h3 className="my-2">Who We Are</h3>
            <p>BidHub was founded by a team of passionate students with a shared love for auctions and a vision for an online platform that simplifies the auction process.</p>
            
            <h3 className="my-2">Why Choose BidHub?</h3>
            <p>Diverse Auction Categories: BidHub hosts a wide range of auctions, from art and antiques to electronics, collectibles, and more. No matter your passion, you're sure to find something you love.</p>
            
            <h3 className="my-2">Join the BidHub Community</h3>
            <p>We invite you to explore our platform and discover the thrill of online auctions.</p>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
