import { useState, useEffect } from "react";
// Supports weights 100-900
import '@fontsource-variable/lexend-deca';
import "./App.css";
import { Header } from "./Header";
// import { Header } from "./Header";

const App = () => {
  const [img, setImg] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const dataRyM = async () => {
      try {
        const info = await fetch(
          "https://rickandmortyapi.com/api/character/?page=19"
        );
        console.log(info)
        if (!info.ok) {
          throw new Error("TENEMOS UN ERROR GIGANTE");
        }
        const infojson = await info.json();
        // console.log(infojson)
        const jsonResult = infojson.results;
        // const resultImages = jsonResult.image
        console.log(jsonResult)
        setImg(jsonResult);
      } catch (error) {
        console.log("este es un error:", error);
        setError(error);
      }
    };
    dataRyM();
  }, []);

  const imagesRyM = img.map((imgRyM) => (
    <div key={imgRyM.id} className="container-img-rickAndMorty">
      <img  src={imgRyM.image} alt="" />
      <section className="container-info">
        <div>
            <span className="name">{imgRyM.name}
            </span>
        </div>
        <div>
          <div>
            <p className="type">Species:<br/>
              <span className="species">{imgRyM.species}
              </span>
            </p>
          </div>
          <div>
            <p>Gender:<br/>
              <span className="gender">{imgRyM.gender}
              </span>
            </p>
          </div>
        </div>
      </section>
     </div>
  ));

  return (
    <>
    <Header />
      <section>
        {imagesRyM}
      </section>
    </>
  );
};

export default App;
