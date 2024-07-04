import { useState, useEffect } from "react";
// Supports weights 100-900
import "@fontsource-variable/lexend-deca";
import "./App.css";
import { Header } from "./Header";
import { Input } from "./Input";
// import { Header } from "./Header";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const App = () => {
  const [img, setImg] = useState([]);
  const [error, setError] = useState(null);
  const [filterName, setFilterName] = useState('')

  useEffect(() => {
    const dataRyM = async () => {
      try {
        const info = await fetch(
          "https://rickandmortyapi.com/api/character/?page=19"
        );
        console.log(info);
        if (!info.ok) {
          throw new Error("TENEMOS UN ERROR GIGANTE");
        }
        const infojson = await info.json();
        // console.log(infojson)
        const jsonResult = infojson.results;
        // const resultImages = jsonResult.image
        console.log(jsonResult);
        setImg(jsonResult);
      } catch (error) {
        console.log("este es un error:", error);
        setError(error);
      }
    };
    dataRyM();
  }, []);

  const handleChange = (event) => {
    setFilterName(event.target.value)
  };

  const findCardName = img.filter((data) =>
    data.name.toLowerCase().includes(filterName.toLowerCase())
  )
  const imagesRyM = findCardName.map((imgRyM) => (
    <motion.div
      key={imgRyM.id}
      className="container-img-rickAndMorty"
      variants={item}
    >
      <img className="images" src={imgRyM.image} alt="" />
      <section className="container-info">
        <div>
          <span className="name">{imgRyM.name}</span>
        </div>
        <div>
          <div>
            <p className="type">
              Species:
              <br />
              <span className="species">{imgRyM.species}</span>
            </p>
          </div>
          <div>
            <p>
              Gender:
              <br />
              <span className="gender">{imgRyM.gender}</span>
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  ));

  return (
    <>
      <Header />
      <Input handleChange={handleChange} />
      <motion.section variants={container} initial="hidden" animate="visible">
        {img && imagesRyM}
      </motion.section>
    </>
  );
};

export default App;
