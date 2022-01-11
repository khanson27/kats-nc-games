import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reviews from "./components/Reviews";
import Nav from "./components/Nav";
import Title from "./components/Title";
import IndividualReview from "./components/IndividualReview";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <h1>Kat's Games</h1>
          <Nav />
          <Title />
          <Routes>
            <Route path="/" element={<Reviews />} />
            <Route
              path="/reviews/category/:category_id"
              element={<Reviews />}
            />
            <Route path="/reviews/:review_id" element={<IndividualReview />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
