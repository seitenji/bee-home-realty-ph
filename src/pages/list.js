import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ListPage = () => (
  <Layout>
    <SEO title="Properties" keywords={[`Real Estate`, `Listing`, `Manila`]} />

    <h1 className="title text-center">Buy</h1>

    <form className="mt-5">
      <div className="form-row justify-content-center">
        <div className="col-md-5   col-sm-12 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a location"
          />
        </div>
        <div className="col-md-auto mb-3">
          <button
            type="button"
            className="btn btn-outline-success btn-block"
            id="btn-price-drop"
          >
            Price <i className="fas fa-caret-down" />
          </button>
          <div className="form-popup" id="price-drop">
            <div className="row">
              <div className="col">
                <input type="text" className="form-control" />
              </div>
              <p className="mt-1">to</p>
              <div className="col">
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-auto mb-3">
          <button
            type="button"
            className="btn btn-outline-success btn-block"
            id="btn-room-drop"
          >
            Number of room <i className="fas fa-caret-down" />
          </button>
          <div className="form-popup" id="room-drop">
            <div>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
        <div className="col-md-auto mb-3">
          <button
            type="button"
            className="btn btn-outline-success btn-block"
            id="btn-size-drop"
          >
            Square meterage <i className="fas fa-caret-down" />
          </button>
          <div className="form-popup" id="size-drop">
            <div>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
        <div className="col-md-1">
          <button type="submit" className="btn btn-warning btn-block mb">
            <i className="fas fa-search" />
          </button>
        </div>
      </div>
    </form>

    <div className="card-deck">
      <div className="card">
        <a href="property.html">
          <img
            src="https://source.unsplash.com/1600x900/?house, condo"
            className="card-img-top"
            alt="property"
          />
        </a>
        <div className="card-body">
          <a className="text-dark" href="property.html">
            <h6 className="card-subtitle mb-2 text-muted">South Pauline</h6>
            <h5 className="card-title">13042 Bogisich Common</h5>
          </a>
          <p className="card-text">Rooms: 2</p>
          <p className="card-text">Square meter: 150 SqM</p>
        </div>
      </div>
      <div className="card">
        <img
          src="https://source.unsplash.com/1600x900/?house, apartment"
          className="card-img-top"
          alt="property"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This card has supporting text below as a natural lead-in to
            additional content.
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      <div className="card">
        <img
          src="https://source.unsplash.com/1600x900/?house, room"
          className="card-img-top"
          alt="property"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  </Layout>
)
export default ListPage
