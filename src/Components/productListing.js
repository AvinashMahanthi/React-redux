import React from "react";
import { useSelector } from "react-redux";

const productListing = () => {
  const products = useSelector((state) => state);
  console.log(state);
  return <div className="ui grid container">productListing</div>;
};

export default productListing;
