"use client"
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

const Products = () => {
  const [productsData, setProductsData] = useState([])

  useEffect(() => {
    const fetchData = async ()=> {
      const products = await fetch("https://fakestoreapi.com/products")
      const result = await products.json();
      setProductsData(result);
    }

    fetchData()
  }, []);

  console.log(productsData)

  return (
    <div>
        <div className='container pt-20'>
            <h2 className='font-medium text-4xl pb-6 text-center'>Products</h2>

            <div className='grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>
              {productsData.map((item) => (
                <ProductCard 
                  key={item.id}
                  img={item.image}
                  title={item.title.split(" ").slice(0, 5).join(" ") + "..."}
                  desc={item.description.split(" ").slice(0, 5).join(" ") + "..."}
                  price={item.price}
                />
              ))}
            </div>
        </div>
    </div>
  )
}

export default Products