import "./App.css";
import Berita from "./component/berita";
import Gallery from "./component/gallery";
import Slide from "./component/Slide";
import Video from "./component/Video";
import Dokumen from "./component/Dokumen";
import Artikel from "./component/artikel";
import { Fragment } from "react";
import Halaman_statis from "./Halaman_statis";

function Dashboard() {
  return (
    <Fragment>
      <Slide />
      <Berita />
      <Artikel />
      <Gallery />
      <Video />
      <Dokumen />
      <Halaman_statis />
    </Fragment>
  );
}

export default Dashboard;
