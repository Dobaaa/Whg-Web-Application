import React, { useState } from "react";
import Data from "../Data";

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
      <div key={category} className="">
        <h2 className="d-flex   col-sm justify-content-center justify-content-md-end ">
          {category}
        </h2>
        <div className="row  ">
          {categoryData.map((item) => (
            <div
              className="col-md-6 col-lg-4 col-xl-3 c d-flex col-sm justify-content-center"
              key={item.title}
            >
              <div className="box mt-5 ">
                <img src={item.img} alt={item.title} />
                <div className="Card-icons d-flex pt-2">
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
          ))}
        </div>
      </div>
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
