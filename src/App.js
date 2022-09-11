import "./App.css";
import Header from "./components/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/layout/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/page/home/Home";
import TVShows from "./components/page/tvshows/TVShows";
import Mores from "./components/page/more/Mores";
import Artists from "./components/page/artist/Artists";
import Movies from "./components/page/movies/Movies";
import AccountSetting from "./components/page/profile/AccountSetting";
import Profile from "./components/page/profile/Profile";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/TVShows" element={<TVShows />} />
          <Route path="/More" element={<Mores />} />
          <Route path="/account-setting" element={<AccountSetting />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
