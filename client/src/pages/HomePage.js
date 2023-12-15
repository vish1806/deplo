import React, { useState, useEffect } from "react";
import axios from "axios";
import { Checkbox } from "antd";
import Layout from "../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";
import '../styles/Homepage.css'

const HomePage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(1);

  //get all cat
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
    }
  };
  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);

  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://bidhub-backend.vercel.app/api/v1/product/product-list/${page}`
      );
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const getTotal = async () => {
    try {
      const { data } = await axios.get(
        "https://bidhub-backend.vercel.app/api/v1/product/product-count"
      );
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);
  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://bidhub-backend.vercel.app/api/v1/product/product-list/${page}`
      );
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // filter by cat
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };
  useEffect(() => {
    if (!checked.length) getAllProducts();
  }, [checked.length]);

  useEffect(() => {
    if (checked.length) filterProduct();
  }, [checked]);

  //get filterd product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post(
        "https://bidhub-backend.vercel.app/api/v1/product/product-filters",
        {
          checked,
        }
      );
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title={"All Products"}>
      <div className="container-fluid d-flex row mt-3 justify-content-center home-page">
        <div className="col-md-2 my-5 filters">
          <h4>Filter by Category</h4>
          <div className="d-flex flex-column pt-3">
            {categories?.map((c, index) => (
              <Checkbox key={c._id} onChange={(e) => handleFilter(e.target.checked, c._id)} style={{ marginBottom: index !== categories.length - 1 ? '30px' : '0' }}> {c.name} </Checkbox>
            ))}
          </div>
          <div className="d-flex flex-column">
            <button
              className="btn btn-danger my-4"
              onClick={() => window.location.reload()}
            >
              RESET FILTERS
            </button>
          </div>
        </div>
        <div className="col-md-9">
          <h1 className="text-center">All Products</h1>
          <div className="d-flex justify-content-between flex-wrap">
            {products?.map((p) => (
              <div className="card mx-4 my-3" style={{ width: "18rem" }}>
                <img
                  src={`https://bidhub-backend.vercel.app/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name} 
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text my-2">
                    {p.description.substring(0, 30)}...
                  </p>
                  <p className="card-text"> Rs. {p.price}</p>
                  <button
                    class="btn btn-primary ms-1"
                    onClick={() => navigate(`/product/${p.slug}`)}
                  >
                    BID NOW
                  </button>
                  <button
                    class="btn btn-secondary ms-1 my-2"
                    onClick={() => {
                      setCart([...cart, p]);
                      localStorage.setItem(
                        "cart",
                        JSON.stringify([...cart, p])
                      );
                      toast.success("Item Added to wishlist");
                    }}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
      <div className="prod m-2 p-3 text-center">
            {products && products.length < total && (
              <button
                className="btn loadmore"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? "Loading ..." : "Load more"}
              </button>
            )}
          </div>
    </Layout>
  );
};

export default HomePage;
