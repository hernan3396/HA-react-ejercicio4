import React, { useState, useEffect } from "react";
import styles from "./Tarjeta.module.css";

import axios from "axios";
const API = axios.create({
  baseURL: "http://www.omdbapi.com",
});

const Tarjeta = ({ nombre, publicacion, comentario, imagenUrl, puntaje }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    let mounted = true;

    const getData = async () => {
      const result = await API.get(`?apikey=93064b0b&t=${nombre}`);
      if (mounted) {
        setData(result.data);
      }
    };
    getData();
    return () => {
      mounted = false;
    };
  }, [nombre]);

  return (
    <div className={styles.tarjeta}>
      <div className={styles.titulo}>
        <p className={styles.nombre}>
          {data.Title} ({data.Year})
        </p>
      </div>

      <div
        className={`${styles.subtitulo} ${
          data.imdbRating >= 7.5 ? styles.bueno : styles.malo
        }`}
      >
        <p className={styles.comentario}>
          {data.imdbRating >= 7.5 ? "Bueno" : "Malo"}
        </p>
      </div>

      <img className={styles.img} src={data.Poster} alt={data.Title} />
    </div>
  );
};

export default Tarjeta;
