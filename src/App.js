import "./App.css";
import Berita from "./component/berita";
import Gallery from "./component/gallery";
import Header from "./component/Header";
import Slide from "./component/Slide";
import Video from "./component/Video";
import Footer from "./component/footer";
import Artikel from "./component/artikel";
import Dokumen from "./component/Dokumen";
import Halaman_statis from "./Halaman_statis";
import { Fragment } from "react";

import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Fragment>
      <Header />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="berita" element={<Berita />} />
        <Route path="artikel" element={<Artikel />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="/static/:id" element={<Halaman_statis />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
