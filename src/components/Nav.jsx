import { getCategories } from "../utils/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi);
    });
  }, []);

  return (
    <nav className="nav">
      {categories.map((category) => {
        return (
          <button key={category.slug}>
            <Link to={`/reviews/category/${category.slug}`}>
              {category.slug}
            </Link>
          </button>
        );
      })}
    </nav>
  );
};
export default Nav;
