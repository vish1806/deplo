import React from "react";
import { Link } from "react-router-dom";
import Layout from "./../components/Layout/Layout";
import './Admin/pnf.css'; // Import CSS file

const Pagenotfound = () => {
  return (
    <Layout title="BidHub">
      <div className="pnf">
        <h1 className="pnf-title">Welcome to BidHub</h1>
        <h2 className="pnf-heading">Enjoy the most seamless bidding experience! ⬇️</h2>

        <div className="d-flex justify-content-center">
          <div className="pnf-btn-container mt-4 ">
            <Link to="/register" className="pnf-btn mx-3">
              New User
            </Link>

            <Link to="/login" className="pnf-btn">
              Existing User
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Pagenotfound;