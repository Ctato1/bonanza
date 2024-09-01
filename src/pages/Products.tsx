import "../styles/products.css";

import Header from "../components/Header/Header";
import CategoryCard from "../components/UI/CategoryCard/CategoryCard";
import products from "../assets/data/products";
import categories from "../assets/data/categories";
import { useEffect, useState } from "react";



interface productProp {
  id: string;
  category: string;
  productName: string;
  geoName: string;
  imgUrl: string;
  price: number;
  shortDesc: string;
  description: string;
}

interface categoryProp {
    name:string,
    imageUrl:string,
}

const Products = () => {
    const [category, setCategory] = useState(categories);
    console.log(category);
    
    // const [categories, setCategories] = useState<string[]>([]);

    // useEffect(() => {
    //   const uniqueCategories = Array.from(new Set(products.map((product:productProp) => product.category)));
    //   console.log(uniqueCategories);
      
    //   setCategories(uniqueCategories);
    // }, [products]);

  return (
    <div>
      <Header />
      Products
      <div className="category-container">
        {
            category.map((item:categoryProp,index:number)=>(
                <CategoryCard name={item.name} imageUrl={item.imageUrl} key={index}/>
            ))
        }
      </div>
    </div>
  );
};

export default Products;
