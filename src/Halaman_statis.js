import { Fragment, useEffect, useState } from "react";
import "./Halaman_statis.css";
import { useParams } from "react-router-dom";

const Halaman_statis = () => {
  const { id } = useParams();
  const [DataHalaman_statis, setDataHalaman_statis] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    const axios = require("axios");

    // Make a request for a user with a given ID
    axios
      .get("http://adminmesuji.embuncode.com/api/static-page/" + id)
      .then(function (Halaman_statis) {
        // handle success
        console.log(Halaman_statis);
        setDataHalaman_statis();
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  return (
    <Fragment>
      {DataHalaman_statis != null ? (
        <Fragment>
          <p>{DataHalaman_statis.content}</p>
          <p>{DataHalaman_statis.instansi_id}</p>
        </Fragment>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default Halaman_statis;
