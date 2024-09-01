import {useNavigate } from "react-router-dom";
import "./categoryCard.css";

interface CategoryCardProps {
  name: string;
  imageUrl: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, imageUrl }) => {
  const cardStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const navigate = useNavigate();

  return (
    <div className="category-card relative cursor-pointer mx-auto my-8 w-4/5 h-52 rounded-3xl overflow-hidden" style={cardStyle} onClick={()=>navigate(name)}>
      <div className="absolute inset-0 bg-black bg-opacity-70 z-10 transition duration-300 ease-in-out rounded-3xl backdrop"></div>
      <h4 className="font-caveat absolute inset-0 flex items-center justify-center text-3xl text-white z-20 m-0">{name}</h4>
    </div>
  );
};

export default CategoryCard;
