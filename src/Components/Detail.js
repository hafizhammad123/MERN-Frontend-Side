import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Navbar from "./Nabar";

function DetailPage() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:2221/product/${id}`);
        const responseData = await response.json();
        setData(responseData.DATA);
        console.log(responseData.DATA); // Log the data here
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the fetchData function
  }, [id]);

  return (
    <div>
     <Navbar/>
      <section className="py-5">
        <div className="container">
          <div className="row gx-5">
            <aside className="col-lg-6">
              <div className="border rounded-4 mb-3 d-flex justify-content-center">
                <a data-fslightbox="mygalley" className="rounded-4" target="_blank" data-type="image" href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big.webp">
                  <img style={{ maxWidth: '100%', maxHeight: '100vh', margin: 'auto' }} className="rounded-4 fit" src={data.img} alt="Product" />
                </a>
              </div>
             
            </aside>

            <aside className="col-lg-6">
              <div className="mb-3">
                <h2 className="text-primary"></h2>
                <p className="text-muted lead">Rs.{data.price}</p>
                <div className="d-flex align-items-center">
                  <select className="form-select" id="select-size">
                    <option defaultValue>Choose your size</option>
                    <option value="1">XXS</option>
                    <option value="2">XS</option>
                    <option value="3">S</option>
                    <option value="4">M</option>
                    <option value="5">L</option>
                    <option value="6">XL</option>
                  </select>
                  <button className="btn btn-primary ms-auto">
                    <i className="fas fa-shopping-cart"></i> Add to cart
                  </button>
                </div>
              </div>
              <div className="mb-3">
                <ul className="nav nav-pills" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-description-tab" data-bs-toggle="pill" data-bs-target="#pills-description" type="button" role="tab" aria-controls="pills-description" aria-selected="true">{data.title}</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-information-tab" data-bs-toggle="pill" data-bs-target="#pills-information" type="button" role="tab" aria-controls="pills-information" aria-selected="false">Information</button>
                  </li>
                </ul>
                <div className="tab-content mt-2" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="pills-description" role="tabpanel" aria-labelledby="pills-description-tab">
                    <p>{data.description}</p>
                  </div>
                  <div className="tab-pane fade" id="pills-information" role="tabpanel" aria-labelledby="pills-information-tab">
                    <p>{data.information}</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DetailPage;
