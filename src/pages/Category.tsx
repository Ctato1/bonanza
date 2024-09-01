import { useParams, Outlet } from "react-router-dom";

const Category = () => {
  const { category } = useParams();
  console.log(category);

  return (
    <div>
      <h1>Category: {category}</h1>
      {/* Render the nested routes here */}
      <Outlet />
    </div>
  );
};

export default Category;