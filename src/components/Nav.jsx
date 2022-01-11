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
      <ul>
        {categories.map((category) => {
          return (
            <button>
              <Link
                to={`/reviews/category/${category.slug}`}
                key={category.slug}
              >
                {category.slug}
              </Link>
            </button>
          );
        })}
      </ul>
    </nav>
  );
};
export default Nav;
