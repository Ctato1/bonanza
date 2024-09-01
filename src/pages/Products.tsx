import "../styles/products.css";
import Header from "../components/Header/Header";
import CategoryCard from "../components/UI/CategoryCard/CategoryCard";
import categories from "../assets/data/categories";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

interface CategoryProp {
  name: string;
  imageUrl: string;
}

const Products = () => {
  const [category] = useState<CategoryProp[]>(categories); // No need for setCategory if you're not modifying state
  const controls = useAnimation();
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      controls.start({ y: scrollTop > lastScrollTop ? -200 : 0 });
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop, controls]);

  return (
    <div className="wraper-products">
      <Header />
      <motion.div
        className="category-container"
        animate={controls}
        initial={{ y: 0 }}
        transition={{ type: "tween", duration: 0.9 }}
      >
        {category.map((item, index) => (
          <CategoryCard name={item.name} imageUrl={item.imageUrl} key={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default Products;
