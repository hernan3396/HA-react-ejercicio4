import React from "react";
import Tarjeta from "./components/Tarjeta";
import styles from "./App.module.css";

const App = () => (
  <div className={styles.app}>
    <Tarjeta nombre="Titanic" />

    {/* <Tarjeta
      nombre="Batman"
      publicacion={1989}
      comentario="Excelente!"
      puntaje="malo"
      imagenUrl="https://i.pinimg.com/originals/92/b4/a6/92b4a64312055fc4ade1e6254835d6bf.png"
    />

    <Tarjeta
      nombre="Batman & Robin"
      publicacion={1997}
      comentario="Regular"
      puntaje="medio"
      imagenUrl="https://upload.wikimedia.org/wikipedia/en/3/37/Batman_%26_Robin_poster.jpg"
    />

    <Tarjeta
      nombre="The Dark Knight"
      publicacion={2008}
      comentario="Muy buena"
      puntaje="bueno"
      imagenUrl="https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
    /> */}
  </div>
);

export default App;
