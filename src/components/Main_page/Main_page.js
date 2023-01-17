import "./Main_page.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

import ReactStars from "react-rating-stars-component";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Home(props) {
  const { countCartItems, onAdd, data, isPending, error } = props;
  useEffect(() => {
    Aos.init({ duration: 1800 });
  }, []);
  const rating = {
    size: 20,
    count: 5,
    color: "grey",
    activeColor: "orange",
    value: 3.5,
    a11y: true,
    isHalf: true,
    emptyIcon: <FontAwesomeIcon icon={faStar} />,
    halfIcon: <FontAwesomeIcon icon={faStarHalfStroke} />,
    filledIcon: <FontAwesomeIcon icon={faStar} />,
  };
  return (
    <div>
      <div className="navbar">
        <div className="heading">
          <h2>FoodGrab:)</h2>
        </div>
        <Link to="/viewcart" className="cart">
          Cart{" "}
          {countCartItems ? (
            <button className="cartitemscount">{countCartItems}</button>
          ) : (
            ""
          )}
        </Link>
      </div>
      <div className="body">
        <center>
          <h1 className="category_heading">
            <b>
              <u>What do you want to Eat?</u>
            </b>
          </h1>
        </center>
        <div className="category"></div>
        <section className="category" id="category">
          <div className="box-container">
            <div data-aos="zoom-in-right" className="box">
              <h3>
                <u>BreakFast Meal</u>
              </h3>
              <p>upto 25% off</p>
              <img src="/Images/tiffins1.jpg" alt="" />
              <Link to="/search/tiffins" className="shop_btn">
                Explore
              </Link>
            </div>
            <div data-aos="zoom-in-up" className="box">
              <h3>
                <u>Vegetarian</u>
              </h3>
              <p>upto 30% off</p>
              <img src="/Images/veg.jpg" alt="" />
              <Link to="/search/veg-meals" className="shop_btn">
                Explore
              </Link>
            </div>
            <div data-aos="zoom-in-left" className="box">
              <h3>
                <u>Non Vegetarian</u>
              </h3>
              <p>upto 15% off</p>
              <img src="/Images/nonveg1.jpg" alt="" />
              <Link to="/search/non-veg-meals" className="shop_btn">
                Explore{" "}
              </Link>
            </div>
          </div>
        </section>
        <div className="fooditems">
          <center>
            <h1 className="category_heading">
              <b>
                <u>Top Dishes </u> :{" "}
              </b>
            </h1>
          </center>
          <div className="fooditembox-container">
            {error && <h1>error</h1>}
            {isPending && <h1 style={{ fontSize: "20px" }}>Loading .......</h1>}
            {data &&
              data.map((item) => (
                <div
                  data-aos="zoom-in-up"
                  className="fooditembox"
                  key={Math.random()}
                >
                  <div className="fooditemblock">
                    <div className="fooditemimagepart"></div>
                    <img src={item.img} alt="" />
                    <span className="discount" style={{ fontSize: "14px" }}>
                      {(((item.mrp - item.price) / item.mrp) * 100).toFixed(1)}
                      <br />
                      Off
                    </span>

                    <div className="fooditemdetailspart">
                      <h3>
                        <u>{item.name}</u>
                      </h3>
                      <br />
                      <div className="stars">
                        <ReactStars {...rating} />
                      </div>
                      <div className="price">
                        {" "}
                        Rs {item.price}/- <span> Rs {item.mrp}/- </span>{" "}
                      </div>
                      <br />
                      <Link to="/checkoutpage" className="order_now_btn">
                        Order Now
                      </Link>
                      <br />
                      <button
                        className="addToCart_btn"
                        onClick={(e) => onAdd(e, item)}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
