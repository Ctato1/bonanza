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

  return (
    <div className="category-card" style={cardStyle}>
      <div className="backdrop"></div>
      <h4 className="">{name}</h4>
    </div>
  );
};

export default CategoryCard;
