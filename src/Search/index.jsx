import React, { useState } from "react";
import Layout from "../Layout";
import ProductList from "../ProductList";
import productApi from "../services/productApi";
import "./search.css";
import { orderBy } from "lodash";

const IconDown = () => (
  <svg
    width="46"
    height="23"
    viewBox="0 0 46 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line
      x1="0.345238"
      y1="0.638322"
      x2="22.3452"
      y2="21.6383"
      stroke="black"
    />
    <line x1="45.3371" y1="1.36924" x2="22.3371" y2="22.3692" stroke="black" />
    <line y1="0.5" x2="45" y2="0.5" stroke="black" />
  </svg>
);

const Search = () => {
  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState();
  const [priceOrder, setPriceOrder] = useState();

  const handleSearch = async () => {
    try {
      setLoading(true);
      const res = await productApi.getAll(input);
      setResults(res?.content);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="search__form container">
        <div className="search__label">Search</div>
        <input
          type="text"
          className="search__input"
          placeholder="Input keyword"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          className={`search__btn ${loading && "pe-none"}`}
          onClick={handleSearch}
        >
          {loading ? "Loading..." : "Search"}
        </button>
      </div>
      <h3 className="heading-gradient">Search result</h3>
      <div className="container text-start mt-5">
        <div>Price</div>
        <div
          onClick={() => {
            setPriceOrder("desc");
          }}
          className="search__input w-400 justify-content-between d-flex"
        >
          decrease
          {priceOrder === "desc" && (
            <span>
              <IconDown />
            </span>
          )}
        </div>
        <div
          onClick={() => {
            setPriceOrder("asc");
          }}
          className="search__input w-400 justify-content-between d-flex mt-1"
        >
          ascending
          {priceOrder === "asc" && (
            <span className="fa-rotate-180">
              <IconDown />
            </span>
          )}
        </div>
      </div>
      {results && results?.length > 0 && (
        <ProductList
          products={
            priceOrder ? orderBy(results, ["price"], [priceOrder]) : results
          }
        />
      )}
      {(!results || results?.length <= 0) && input.trim() && (
        <div>Not found</div>
      )}
    </Layout>
  );
};

export default Search;
