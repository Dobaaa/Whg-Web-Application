import React, { useState } from "react";
import Data from "../Data";
import { Link } from "react-router-dom";

export default function Card() {
  const categories = [...new Set(Data.map((item) => item.category))]; // Get unique categories

  const [filterCategory, setFilterCategory] = useState(null);

  const handleFilter = (category) => {
    setFilterCategory(category);
  };

  const filteredData = filterCategory
    ? Data.filter((item) => item.category === filterCategory)
    : Data;

  const Products = categories.map((category) => {
    const categoryData = filteredData.filter(
      (item) => item.category === category
    );
    if (categoryData.length === 0) {
      return null;
    }
    return (
      <>
        <div key={category}>
          <h2 className="d-flex   col-sm justify-content-center justify-content-md-end ">
            {category}
          </h2>
          <div className="row  pb-5">
            {categoryData.map((item) => (
              <div
                to={`/Card/${item.id}`}
                className="col-md-6 col-lg-4 col-xl-3 c d-flex col-sm justify-content-center"
                key={item.id}
              >
                <Link
                  to={`/Card/${item.id}`}
                  key={item.id}
                  className="pro-link"
                >
                  <div className="box mt-5  d-flex flex-column ">
                    <img src={item.img} alt={item.title} />
                    <div className="box-desc text-end">
                      <div className="Card-icons d-flex pt-2 justify-content-end pb-3">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>

                      <h5>{item.title}</h5>
                      <p>{item.Adress}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  });

  return (
    <div className="cards">
      <div className="container">
        <div className="row ">
          <div className="col-sm flex-wrap col-12 mb-3 d-flex justify-content-start gap-3 filter-btn ">
            <button onClick={() => handleFilter(null)}>الكل</button>
            {categories.map((category) => (
              <button key={category} onClick={() => handleFilter(category)}>
                {category}
              </button>
            ))}
          </div>
          {Products}
        </div>
      </div>
    </div>
  );
}
