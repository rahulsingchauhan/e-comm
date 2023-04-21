import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProductCard from "./ProductCard";
import Carousel from "./Carousel";

const Tshirt = () => {
  return (
    <>
      <Navbar />
     
      <Carousel />
      <ProductCard
        imageSrc=""
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        price="$19.99"
      />
      <ProductCard
        imageSrc=""
        name="Product 2"
        description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        price="$29.99"
      />
      <ProductCard
        imageSrc=""
        name="Product 3"
        description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        price="$39.99"
      />
      <ProductCard
        imageSrc="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vdHdlYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        name="Product 3"
        description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        price="$39.99"
      />
      <ProductCard
        imageSrc="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vdHdlYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        name="Product 3"
        description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        price="$39.99"
      />
      <Footer />
    </>
  );
};

export default Tshirt;
