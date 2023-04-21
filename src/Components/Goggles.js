import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import ProductCard from './ProductCard';
import Carousel from './Carousel';

const Goggles = () => {
  return (
    <>
<Navbar/>
<Carousel/>
<ProductCard
          imageSrc="https://images.unsplash.com/photo-1508643315917-6688bbbb4cb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZXllJTIwd2VhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          name="Product 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          price="$19.99"
        />
        <ProductCard
          imageSrc="https://images.unsplash.com/photo-1557775446-b5678ecaf086?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZXllJTIwd2VhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          name="Product 2"
          description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          price="$29.99"
        />
        <ProductCard
          imageSrc="https://images.unsplash.com/photo-1625887022688-15bf883d94a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZXllJTIwd2VhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          name="Product 3"
          description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          price="$39.99"
        />
        <ProductCard
          imageSrc="https://images.unsplash.com/photo-1631486676757-4f5ade178282?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGV5ZSUyMHdlYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          name="Product 3"
          description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          price="$39.99"
        />
        <ProductCard
          imageSrc="https://images.unsplash.com/photo-1631383591182-aa24205c089a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGV5ZSUyMHdlYXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          name="Product 3"
          description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          price="$39.99"
        />
<Footer/>
</>
  )
}

export default Goggles