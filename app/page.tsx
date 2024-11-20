import React from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

const Home = () => {
  const products = [
    {
      name: "Stylish T-Shirt",
      description: "A comfortable and stylish T-Shirt for daily wear.",
      price: 19.99,
      image: "/shirt.webp",
    },
    {
      name: "Running Shoes",
      description: "Perfect for jogging and sports activities.",
      price: 49.99,
      image: "/shoes.png",
    },
    {
      name: "Smart Watch",
      description: "Track your fitness and stay connected.",
      price: 99.99,
      image: "/watch.png",
    },
  ];

  return (
    <div>
      <Header />
      <main className="w-full bg-gray-300 py-4">
        <h1 className="text-4xl font-bold text-center mb-6">Our Products</h1>
        <div
          id="products"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full"
        >
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
