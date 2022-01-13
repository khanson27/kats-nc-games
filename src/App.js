import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Reviews from "./components/Reviews";
import Nav from "./components/Nav";
import IndividualReview from "./components/IndividualReview";

function App() {
  const [username, setUsername] = useState("jessjelly");
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <h1>
            <Link to="/">Kat's Games</Link>
          </h1>
          <Nav />
          <Routes>
            <Route path="/" element={<Reviews />} />
            <Route path="/reviews/category/:category" element={<Reviews />} />
            <Route
              path="/reviews/:review_id"
              element={<IndividualReview username={username} />}
            />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
