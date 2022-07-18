import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FavoritePosts from "./pages/FavoritePosts/FavoritePosts";
import Main from "./pages/Main";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/favorite" element={<FavoritePosts />} />
      </Routes>
    </div>
  );
}

export default App;
