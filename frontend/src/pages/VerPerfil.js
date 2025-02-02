import styles from "./VerPerfil.module.css";
import React, { useState, useEffect } from "react";
import jsonData from "./datos.json";
import axios from 'axios';

const VerPerfil = () => {
  const { access } = JSON.parse(localStorage.getItem('token'));
  const config = {
    headers: {
      Authorization: `Bearer ${access}`,
    },
  };     
  const [username, setUsername] = useState("");
  const [userlastname, setUserlastname] = useState("");
  const [useremail, setUseremail] = useState("");
  const [userbirth, setUserbirth] = useState("");
  const [userid, setUserid] = useState("");

  async function getProfile() {
    const { data }  = await axios.get(
      'http://localhost:8000/api/v1/students/profile/',
      config
    );
    const subjectData = data;
    const { user: {first_name, last_name, email, birth_date, document_no}} = subjectData;
  setUsername(first_name);
  setUserlastname(last_name);
  setUseremail(email);
  setUserbirth(birth_date);
  setUserid(document_no);

  } 
    getProfile();



  return (
    <div className={styles.verPerfil}>
      <div className={styles.verPerfil1}>
        <div className={styles.verPerfilChild} />
        <div className={styles.groupParent}>
          <div className={styles.groupContainer}>
            <input
              className={styles.groupChild}
              type="text"
              placeholder="Email no encontrado"
              defaultValue={useremail}
              readOnly
            />
            <div className={styles.cumpleaos}>Cumpleaños</div>
          </div>
          <div className={styles.groupDiv}>
            <input
              className={styles.groupItem}
              type="text"
              placeholder="fecha de nacimiento no encontrada"
              defaultValue={userbirth}
              readOnly
            />
            <div className={styles.email}>{`Email `}</div>
          </div>
          <div className={styles.groupParent1}>
            <input
              className={styles.groupInner}
              type="text"
              placeholder="Apellido no encontrado"
              defaultValue={userlastname}
              readOnly
            />
            <div className={styles.apellido}>Apellido</div>
          </div>
          <div className={styles.groupParent2}>
            <input
              className={styles.groupInput}
              type="text"
              placeholder="Nombre no encontrado"
              defaultValue={username}
              readOnly
            />
            <div className={styles.apellido}>Nombre</div>
          </div>
          <div className={styles.groupParent3}>
            <input
              className={styles.groupChild1}
              type="text"
              placeholder="ID no encontrado"
              defaultValue={userid}
              readOnly
            />
            <div className={styles.id}>ID</div>
          </div>
          <button className={styles.frameWrapper}>
            <a href = "/dashboard-estudiante2">
            <button className={styles.regresarWrapper}>
              <div className={styles.regresar}>REGRESAR</div>
            </button>
            </a>
          </button>
        </div>
        <div className={styles.configuracion}>Configuracion</div>
        <div className={styles.verPerfilItem} />
      </div>
      <b className={styles.estudiante}>ESTUDIANTE</b>
    </div>
  );
};

export default VerPerfil;
