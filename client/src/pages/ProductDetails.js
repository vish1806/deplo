import UserMenu from "../components/Layout/UserMenu";
import Layout from "../components/Layout/Layout";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";
import { useNavigate, useParams } from "react-router-dom";
const { Option } = Select;
const ProductDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [winner, setWinner] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [endtime, setEndtime] = useState("");
  const [category, setCategory] = useState("");
  const [photo, setPhoto] = useState("");
  const [id, setId] = useState("");
  const [timeLeft, setTimeLeft] = useState("");
  const [auctionEnded, setAuctionEnded] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const duration = (new Date(endtime) - new Date()) / 1000;
      if (duration <= 0) {
        setTimeLeft(`0d 0h 0m 0s`);
        setAuctionEnded(true);
      } else {
        const days = Math.floor(duration / (24 * 3600));
        const hours = Math.floor((duration % (24 * 3600)) / 3600);
        const minutes = Math.floor((duration % 3600) / 60);
        const seconds = Math.floor(duration % 60);
        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [endtime]);
  //get single product
  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(
        `https://bidhub-backend.vercel.app/api/v1/product/get-product/${params.slug}`
      );
      setName(data.product.name);
      setId(data.product._id);
      setDescription(data.product.description);
      setPrice(data.product.price);
      setEndtime(data.product.endtime);
      setCategory(data.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
    //eslint-disable-next-line
  }, []);

  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        "https://bidhub-backend.vercel.app/api/v1/category/get-category"
      );
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting catgeory");
    }
  };
  useEffect(() => {
    getAllCategory();
  }, []);

  const getSingleWinner = async () => {
    try {
      const { data } = await axios.get(
        `https://bidhub-backend.vercel.app/api/v1/product/get-product/${params.slug}`
      );
      setWinner(data.product.winner);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auctionEnded || !auctionEnded) {
      getSingleWinner();
      //eslint-disable-next-line
    }
  }, []);

  const handleBid = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("endtime", endtime);
      productData.append("category", category);
      productData.append("winner", winner);
      photo && productData.append("photo", photo);
      const { data } = axios.put(
        `https://bidhub-backend.vercel.app/api/v1/product/bid-product/${id}`,
        productData
      );
      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Product Updated Successfully");
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };
  return (
    <Layout title={"Dashboard - Bid Product"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h1>Bid Product</h1>
            <div className="m-1 w-75">
              <Select
                bordered={false}
                placeholder="Select a category"
                size="large"
                showSearch
                className="form-select mb-3"
                onChange={(value) => {
                  setCategory(value);
                }}
                value={category}
                disabled
              >
                {categories?.map((c) => (
                  <Option key={c._id} value={c._id}>
                    {c.name}
                  </Option>
                ))}
              </Select>
              <div className="mb-3">
                {/* <label className="btn btn-outline-secondary col-md-12">
                  {photo ? photo.name : "Upload Photo"}
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={(e) => setPhoto(e.target.files[0])}
                    disabled
                    hidden
                  />
                </label> */}
              </div>
              <div className="mb-3">
                {photo ? (
                  <div className="text-center">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt="product_photo"
                      height={"200px"}
                      className="img img-responsive"
                    />
                  </div>
                ) : (
                  <div className="text-center">
                    <img
                      src={`https://bidhub-backend.vercel.app/api/v1/product/product-photo/${id}`}
                      alt="product_photo"
                      height={"200px"}
                      className="img img-responsive"
                    />
                  </div>
                )}
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={name}
                  placeholder="Enter product name"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                  disabled
                />
              </div>
              <div className="mb-3">
                <textarea
                  type="text"
                  value={description}
                  placeholder="Enter product description"
                  className="form-control"
                  onChange={(e) => setDescription(e.target.value)}
                  disabled
                />
              </div>
              {auctionEnded ? (
                <div className="mb-3">
                  <button className="btn btn-primary">
                    {winner} is the winner
                  </button>
                  {/* <div className="mb-3">
                    <input
                      type="text"
                      value={winner}
                      placeholder="Re-enter your Username to Confirm"
                      className="form-control"
                      onChange={(e) => setWinner(e.target.value)}
                      disabled
                    />
                  </div> */}
                </div>
              ) : (
                <div>
                  <div className="mb-3">
                    <input
                      type="number"
                      value={price}
                      placeholder="Enter bid"
                      className="form-control"
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      value={winner}
                      placeholder="Re-enter your Username to Confirm"
                      className="form-control"
                      onChange={(e) => setWinner(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <button className="btn btn-primary" onClick={handleBid}>
                      CONFIRM QUOTE
                    </button>
                  </div>
                </div>
              )}
              <div className="mb-3">
                {/* <input
                  type="number"
                  value={endtime}
                  placeholder="Enter endtime (in hours)"
                  className="form-control"
                  onChange={(e) => setEndtime(e.target.value)}
                  disabled
                /> */}
                <button className="btn btn-success">
                  Time Left: <span className="font-bold">{timeLeft}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
