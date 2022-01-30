import { getCategories } from "../utils/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import LoadingIcon from "./LoadingIcon";

const Nav = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getCategories()
      .then((categoriesFromApi) => {
        setCategories(categoriesFromApi);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  if (error) {
    return <ErrorPage error={error} />;
  }
  return (
    <nav className="nav">
      {isLoading ? (
        <LoadingIcon />
      ) : (
        categories.map((category) => {
          return (
            <button key={category.slug}>
              <Link to={`/reviews/category/${category.slug}`}>
                {category.slug.replace(/-/g, " ")}
              </Link>
            </button>
          );
        })
      )}
    </nav>
  );
};
export default Nav;
