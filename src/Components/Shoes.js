import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import ProductCard from './ProductCard';
import Carousel from './Carousel';

const Shoes = () => {
  return (
    <>
<Navbar/>
<h1>sdfhk,lsjfksgjuk</h1>
<Carousel/>

<ProductCard 
          imageSrc="https://images.unsplash.com/photo-1603808033192-082d6919d3e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80"
          name="Product 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          price="$19.99"
        />
        <ProductCard
          imageSrc="https://images.unsplash.com/photo-1588361861040-ac9b1018f6d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vdHdlYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60.jpg"
          name="Product 2"
          description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          price="$29.99"
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
        <ProductCard
          imageSrc="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vdHdlYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          name="Product 3"
          description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          price="$39.99"
        />
<Footer/>
</>
  )
}

export default Shoes