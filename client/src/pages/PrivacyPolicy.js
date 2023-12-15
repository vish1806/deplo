import React from "react";
import Layout from "./../components/Layout/Layout";

import logo from './logo.jpg';

const Policy = () => {
  return (
    <Layout title="Privacy Policy - BidHub">
      <div className="row contactus ">
        <div className="col-md-6 ">
        <img src={logo} className="logo my-3 mx-4" alt="logo" height="370px" width="400px"/>
        </div>
        <div className="col-md-4">
            <h3 className="my-3 pt-2">Privacy Policy for bidHUB</h3>
            <p>This Privacy Policy describes how bidHUB collects, uses, maintains, and discloses information collected from users ("Users") of the bidHUB website ("Site").</p>
            
            <h3 className="my-2">Personal Identification Information:</h3>
            <p>We may collect personal identification information from Users in various ways, including, but not limited to, when Users visit our site, register on the site, place an order, respond to a survey, fill out a form, and in connection with other activities, services, features, or resources we make available on our Site. Users may be asked for their name, email address, mailing address and phone number. Users may, however, visit our Site anonymously. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personal identification information, except that it may prevent them from engaging in certain Site-related activities.</p>
            
            <h3 className="my-2">Non-personal Identification Information:</h3>
            <p>We may collect non-personal identification information about Users whenever they interact with our Site. </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
